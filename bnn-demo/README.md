# 二值神经网络实现指南

本项目为二值神经网络（BNN）实现与解析的静态网页，适合AI科普、教学与嵌入式AI部署参考。

## 目录结构

```
project-root/
├── public/
│   └── bilibili-logo.png         # Bilibili按钮用的官方小电视图标
├── src/
│   ├── index.html                # 主页面，BNN实现与解析
│   └── feature-explain.html      # 关键功能详细解释页
└── README.md                     # 项目说明
```

## 使用说明

1. 直接用浏览器打开 `src/index.html` 即可本地预览。
2. 若需部署到服务器，将 `src/` 下所有HTML文件和 `public/` 下所有资源一同上传。

## 主要功能
- BNN核心代码与原理展示
- 关键技术解析与扩展建议
- 便捷跳转Bilibili、GitHub、必应等网站

## 资源归类
- 图片、图标等静态资源统一放在 `public/`
- HTML源码放在 `src/`

---

## 表单数据本地记录功能

本项目支持通过Node.js后端将用户在反馈表单填写的信息记录到本地CSV表格，便于后续统计和分析。

### 使用方法

1. **安装依赖**（在项目根目录下执行）：
   ```bash
   npm install express body-parser cors
   ```

2. **新建 `server.js` 文件**，内容如下：
   ```js
   const express = require('express');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   const fs = require('fs');
   const path = require('path');

   const app = express();
   const PORT = 3000;
   const CSV_PATH = path.join(__dirname, 'feedback.csv');

   app.use(cors());
   app.use(bodyParser.json());

   app.post('/api/feedback', (req, res) => {
       const { nickname, contact, advice } = req.body;
       const date = new Date().toISOString();
       const row = `"${nickname || ''}","${contact || ''}","${advice.replace(/"/g, '""')}","${date}"\n`;
       if (!fs.existsSync(CSV_PATH)) {
           fs.writeFileSync(CSV_PATH, '昵称,联系方式,建议,时间\n');
       }
       fs.appendFileSync(CSV_PATH, row);
       res.json({ success: true });
   });

   app.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}`);
   });
   ```

3. **前端表单对接**
   - `src/feedback.html` 已内置表单，提交时会自动POST到 `/api/feedback`。
   - 启动Node.js服务后，填写表单即可将数据保存到 `feedback.csv`。

4. **启动后端服务**
   ```bash
   node server.js
   ```

5. **查看数据**
   - 所有反馈数据会自动追加到项目根目录下的 `feedback.csv` 文件，可用Excel等工具打开查看。

---
如需自定义表单字段或保存格式，可修改 `feedback.html` 和 `server.js`。

如需自定义或扩展，建议遵循本目录结构，便于维护和部署。 