# GitHub Pages 部署指南

## 部署步骤

### 1. 在 GitHub 上创建仓库
1. 访问 https://github.com/new
2. 输入仓库名称：`land_personality`
3. 选择 "Public"（公开）
4. **不要** 初始化 README、.gitignore 或 license
5. 点击 "Create repository"

### 2. 命令行推送代码
项目已初始化为 git 仓库，执行以下命令推送代码：

```bash
cd "e:\农大\yyx\260617\land_personality"
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 访问你的仓库：https://github.com/FANLS05/land_personality
2. 点击 Settings（设置）
3. 在左侧菜单选择 "Pages"
4. 在 "Build and deployment" 中：
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 "main" 和 "/ (root)"
   - 点击 "Save"

5. 等待 1-2 分钟部署完成

### 4. 验证部署
1. 在 Settings > Pages 页面可以看到你的网站 URL
2. 格式为：https://FANLS05.github.io/land_personality/
3. 访问这个 URL 即可看到你的网站

## 注意事项
- 确保 `index.html` 在项目根目录
- GitHub Pages 会自动识别 `index.html` 作为主页
- 任何对 `main` 分支的推送都会自动部署

## 后续更新
修改代码后，使用以下命令更新网站：
```bash
git add .
git commit -m "Update message"
git push origin main
```
