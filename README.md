# 🚀 老王图床 | Buling ImgBed

<div align="center">
    <h1>🌈 老王图床前端</h1>
    <p>老王图床前端，基于 Vue3 + Nuxt3</p>
    <p>
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
        <img src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg" alt="version">
        <img src="https://img.shields.io/badge/Nuxt-3.x-00DC82.svg" alt="nuxt">
        <img src="https://img.shields.io/badge/Vue-3.x-4FC08D.svg" alt="vue">
    </p>
    <p>
        <a href="https://img.808080.xyz">🌍 在线演示</a> ·
        <a href="#部署指南">🚀 部署指南</a> ·
        <a href="#使用文档">📚 使用文档</a> ·
        <a href="https://anuuu.com/buling-imgbed.html">🎯 项目详解</a>
    </p>
</div>

> 🎯 基于 Cloudflare 的现代化图床解决方案，零成本易部署，为个人提供便捷的图片托管服务。
> 
> ⚠️ 注意：本项目为布灵图床的前端部分，使用前请先完成后端部署：[布灵图床后端](https://github.com/wzs8/buling-imgbed)
>
> 📢 部署顺序：
> 1. 先部署后端服务 [布灵图床后端](https://github.com/wzs8/buling-imgbed)
> 2. 获取后端 API 地址
> 3. 再部署本前端项目

## ✨ 功能特性

- 👤 **用户系统**
  - 登录和个人信息管理
- 🖼️ **图片管理**
  - 多种上传方式（点击/拖拽/粘贴）
  - 智能图片压缩
  - 批量操作功能
  - 图片预览和删除
- 🤖 **Telegram Bot**
  - 便捷的图片上传
  - 自动返回多种格式链接
- ⚙️ **自定义配置**
  - 自定义域名支持
  - CDN 加速
  - 图片优化选项
  - 存储空间管理
- 🛡️ **安全可靠**
  - 私有化部署
  - 数据安全保障
  - 完善的权限控制
- 🎨 **现代化界面**
  - 基于 Vue3 + Nuxt3 开发
  - 响应式设计
  - 移动端适配
  - 亮色/暗色主题切换
  - 优雅的交互体验


## 📸 效果预览

<table>
  <tr>
    <td><img src="https://s1.img.808080.xyz/07a0de2be6678c5e27e75a7e5a646cce.png" alt="首页预览"></td>
    <td><img src="https://s1.img.808080.xyz/410f2aeb7b63e9048ed55f99df050627.png" alt="上传预览"></td>
  </tr>
</table>


## 🚀 部署指南

### 部署准备

- Cloudflare 账号（生成CF_API_TOKEN、CF_ACCOUNT_ID）
- NUXT_PUBLIC_API_BASE（你的后端API地址）

<details>
<summary>📝 如何获取这些配置？ · <a href="https://anuuu.com/buling-imgbed-config.html">📖 查看图文教程</a></summary>

#### 1. Cloudflare 配置获取
1. 注册并登录 [Cloudflare](https://dash.cloudflare.com)
2. 获取 Account ID：
   - 登录后点击右上角的账号图标
   - 在下拉菜单中选择 "Account Home"
   - 在右侧可以找到你的 Account ID
3. 创建 API Token：
   - 进入 [API Tokens 页面](https://dash.cloudflare.com/profile/api-tokens)
   - 点击 "Create Token"
   - 选择 "Create Custom Token"
   - 权限设置：
     - Account.Workers R2 Storage: Read & Write
     - Account.Workers Scripts: Edit
     - Account.D1: Edit
#### 2. NUXT_PUBLIC_API_BASE 获取
1. 登录 Cloudflare 
2. 进入 Workers & Pages 页面
3. 找到你部署的后端 Worker
4. 在 Worker 详情页面中找到"自定义域名"部分
5. 复制你的 Worker 域名（例如: https://your-worker.your-subdomain.workers.dev）
   - 如果你配置了自定义域名，也可以使用自定义域名
   - 确保域名以 `https://` 开头，末尾不要带斜杠 `/`

</details>

### 一键部署到 Cloudflare Pages（🌟推荐）
👉 [查看详细图文部署教程](https://anuuu.com/buling-imgbed-frontend-deploy.html)

1. Fork 本仓库
2. 配置 GitHub Secrets:
   ```
   CF_API_TOKEN=your_cloudflare_api_token
   CF_ACCOUNT_ID=your_cloudflare_account_id
   NUXT_PUBLIC_API_BASE=你的后端API地址
   ```
3. 启用 GitHub Actions
4. 推送代码触发自动部署

### 其他部署方式

#### Vercel 部署
1. Fork 本仓库
2. 在 Vercel 导入项目
3. 配置环境变量：
   ```
   NUXT_PUBLIC_API_BASE=你的后端API地址
   ```
4. 点击 Deploy 开始部署


> 注意：无论采用何种部署方式，都需要先完成后端服务的部署并配置正确的API地址。

## 📚 技术栈

- 🎨 前端框架：Vue 3 + Nuxt 3
- 🏗️ 构建工具：Vite
- 🚀 部署平台：Cloudflare Pages
- 📦 图片压缩：browser-image-compression

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📜 开源协议

本项目基于 [MIT 协议](LICENSE) 开源。

## 🎉 鸣谢
- [Cloudflare](https://www.cloudflare.com/) - 提供优秀的基础设施服务
- [Hono](https://hono.dev/) - 优秀的 Web 框架
- [开源社区](https://github.com/) - 感谢所有开源贡献者

感谢所有为这个项目做出贡献的开发者们！

如果这个项目对你有帮助，欢迎 star ⭐️ 支持一下！
