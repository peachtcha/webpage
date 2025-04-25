# BNN二值神经网络演示项目

## 项目简介

本项目是一个关于二值神经网络(Binary Neural Network, BNN)的Web应用，旨在通过可视化和交互式的方式展示BNN的原理、实现和应用场景。BNN是一种特殊的神经网络，其权重和激活值被限制为+1或-1，使其在嵌入式和低功耗设备上具有显著优势。

## 主要特点

- **基础知识讲解**：介绍二值神经网络的基本概念和优势
- **算法可视化**：直观展示BNN的训练和推理过程
- **代码示例**：提供不同框架下的BNN实现示例
- **应用场景**：展示BNN在嵌入式设备上的实际应用
- **用户反馈系统**：收集用户意见以持续改进项目

## 项目结构

```
/
├── README.md           # 项目说明文档
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

## 使用说明

### 本地预览

直接打开 `src/index.html` 文件即可在浏览器中预览网站内容。

### 启用反馈功能

如需启用反馈提交和历史记录功能，请按以下步骤启动服务器：

1. 确保已安装Node.js环境
2. 安装依赖包：
   ```bash
   npm install express body-parser cors
   ```
3. 启动服务器：
   ```bash
   node server.js
   ```
4. 服务器将在 http://localhost:3000 启动

### 数据存储

- 用户提交的反馈将存储在 `feedback.csv` 文件中
- 所有数据仅存储在本地，不会上传至任何外部服务器

## 技术栈

- 前端：HTML, CSS, JavaScript
- 后端：Node.js, Express
- 数据存储：CSV文件

## 部署建议

- 可使用GitHub Pages进行静态部署
- 如需反馈功能，建议部署在支持Node.js的服务器上

## 关于作者

peachtcha - 项目创建者与维护者

## 贡献指南

欢迎提交问题反馈和改进建议！ 