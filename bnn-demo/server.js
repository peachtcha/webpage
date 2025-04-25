const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const CSV_PATH = path.join(__dirname, 'feedback.csv');

// 允许跨域（如果前后端端口不同）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('src')); // 前端页面
app.use('/public', express.static('public')); // 静态资源

// 获取所有反馈数据
app.get('/api/feedback', (req, res) => {
    try {
        if (!fs.existsSync(CSV_PATH)) {
            return res.json([]);
        }

        const content = fs.readFileSync(CSV_PATH, 'utf-8');
        const lines = content.trim().split('\n');
        
        // 跳过表头
        const data = lines.slice(1).map(line => {
            const [nickname, contact, advice, date] = line
                .split(',')
                .map(field => field.replace(/^"|"$/g, '')); // 移除引号
            return { nickname, contact, advice, date };
        });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: '读取数据失败' });
    }
});

// 提交反馈数据
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

// 下载反馈表格
app.get('/api/feedback/download', (req, res) => {
  const filePath = path.join(__dirname, 'feedback.csv');
  if (fs.existsSync(filePath)) {
    res.download(filePath, 'feedback.csv');
  } else {
    res.status(404).send('No feedback yet.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 