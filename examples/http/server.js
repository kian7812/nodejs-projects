const http = require('http'); // 这里是在全局的 http 模块
const fs = require('fs');

const app = http.createServer((req, res) => {
    // res.write('hi i am  learning nodejs');
    const data = fs.readFileSync('./index.html');
    res.end(data.toString());
});

app.listen(3000, () => {
    console.log('server is running');
});

