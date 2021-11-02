const http = require('http'); // 这里是在全局的 http 模块

const app = http.createServer((req, res) => {
    res.write('hi i am  learning nodejs');
    res.end();
});

app.listen(3000, () => {
    console.log('server is running');
});

