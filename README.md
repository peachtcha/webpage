# BNN二值神经网络项目

这是一个二值神经网络(BNN)实现与解析的Web应用项目，旨在提供AI科普、教学与嵌入式AI部署参考。

## 项目结构

```
/
├── README.md               # 项目根目录说明
├── bnn-demo/               # 主项目目录
    ├── README.md           # 项目详细说明
    ├── public/             # 静态资源目录
    │   └── bilibili-logo.png # 站外链接图标
    ├── src/                # 源代码目录  
    │   ├── index.html      # 主页面
    │   ├── profile.html    # 用户资料页
    │   ├── feature-explain.html  # 功能说明页
    │   ├── feedback.html   # 反馈页面
    │   ├── extension-detail.html # 扩展详情页
    │   ├── temp.html       # 临时页面
    │   └── back-to-top.js  # 回顶部功能脚本
    ├── server.js           # 反馈表单后端服务器
    └── feedback.csv        # 存储用户反馈数据
```

## 快速开始

1. 打开 `bnn-demo/src/index.html` 可以本地预览网站
2. 如需启用反馈功能，请运行服务器：
   ```bash
   cd bnn-demo
   npm install express body-parser cors
   node server.js
   ```
   服务器将在 http://localhost:3000 启动

## 功能特点

- 二值神经网络原理与实现的详细解析
- 交互式体验与图形化展示
- 提供技术文档与代码示例
- 用户反馈系统

## 贡献者

- peachtcha - 项目创建者
