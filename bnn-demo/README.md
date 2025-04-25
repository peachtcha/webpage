# 二值神经网络实现指南

本项目为二值神经网络（BNN）实现与解析的静态网页，适合AI科普、教学与嵌入式AI部署参考。

## 目录结构

```
project-root/
├── public/                  # 静态资源（图片、图标等）
├── src/                     # HTML源码
│   ├── index.html           # 主页面
│   └── feature-explain.html # 关键功能解释页
└── README.md                # 项目说明
```

## 使用说明

1. 用浏览器打开 `src/index.html` 本地预览。
2. 部署到服务器时，将 `src/` 下HTML文件和 `public/` 下资源一同上传。

## 主要功能
- BNN核心代码与原理展示
- 技术解析与扩展建议
- 便捷跳转Bilibili、GitHub等

## 表单数据本地记录（可选）

如需将反馈表单数据保存为本地CSV：
1. 安装依赖：
   ```bash
   npm install express body-parser cors
   ```
2. 新建 `server.js`，内容见原README。
3. 启动服务：
   ```bash
   node server.js
   ```
4. 表单数据将保存到根目录下 `feedback.csv`。

如需自定义表单字段或保存格式，请修改 `feedback.html` 和 `server.js`。 