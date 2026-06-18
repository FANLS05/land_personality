import argparse
import base64
import json
import sys
import urllib.parse


def decode_marker(marker: str) -> dict:
    """Decode the compact marker string back into name and answers."""
    marker = marker.strip().replace("\n", "").replace(" ", "")
    marker = marker.lstrip("=")
    marker += "=" * ((4 - len(marker) % 4) % 4)

    decoded_bytes = base64.b64decode(marker)
    decoded = decoded_bytes.decode("utf-8")
    decoded = urllib.parse.unquote(decoded)

    slash = decoded.find("/")
    if slash < 0:
        raise ValueError("格式不正确：未找到 '/' 分隔符")

    name_len = int(decoded[:slash])
    body = decoded[slash + 1:]
    name = body[:name_len]
    answers = body[name_len:]
    return {"name": name, "answers": answers}


def main() -> int:
    parser = argparse.ArgumentParser(description="Decode a compact test marker string.")
    parser.add_argument("marker", nargs="?", help="The marker string to decode.")
    args = parser.parse_args()

    if not args.marker:
        if sys.stdin.isatty():
            args.marker = input("请输入标记号：").strip()
        else:
            args.marker = sys.stdin.read().strip()

    if not args.marker:
        print("未提供标记号。", file=sys.stderr)
        return 1

    try:
        result = decode_marker(args.marker)
    except Exception as exc:
        print(f"解码失败：{exc}", file=sys.stderr)
        return 2

    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
