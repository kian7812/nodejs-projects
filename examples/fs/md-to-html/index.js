const fs = require("fs");
const path = require("path");
const marked = require("marked");
const browserSync = require("browser-sync");

/**
 * 文件操作实现 md 转html
 *
 * 需求：把md内容提取出来；转成html内容；在浏览器打开；修改md内容浏览器内容实时更新。
 * 01 读取md 和 css 内容
 * 02 将上述读取内容，替换占位符，生成最终展示的html字符
 * 03 将上述的html 字符写入到指定的 html 文件中
 * 04 监听md文档内容变化，然后更新html内容
 * 05 使用 browser-sync 来实时显示 html 内容
 */

// 当前命令行目录 md-to-html ✗ node ./index.js index.md
const mdPath = path.join(__dirname, process.argv[2]);
const cssPath = path.resolve("index.css");
const htmlPath = mdPath.replace(path.extname(mdPath), ".html");
console.log(mdPath);
console.log(cssPath);
console.log(htmlPath);
// /Users/xxx/learn/nodejs-projects/examples/fs/md-to-html/index.md
// /Users/xxx/learn/nodejs-projects/examples/fs/md-to-html/index.css
// /Users/xxx/learn/nodejs-projects/examples/fs/md-to-html/index.html

fs.watchFile(mdPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    fs.readFile(mdPath, "utf-8", (err, data) => {
      // 将md => html
      const htmlStr = marked.parse(data);
      fs.readFile(cssPath, "utf-8", (err, data) => {
        const retHtml = temp
          .replace("{{content}}", htmlStr) // 替换 html 内容
          .replace("{{style}}", data); // 替换 style 内容

        // 将上述内容写入到指定 html 文件中，用于在浏览器进行展示
        fs.writeFile(htmlPath, retHtml, (err) => {
          console.log("html 生成成功");
        });
      });
    });
  }
});

browserSync.init({
  browser: "", // 当前浏览器
  server: __dirname, // 服务目录
  watch: true, // 监听变化
  index: path.basename(htmlPath), // 服务入口文件
});

const temp = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 45px;
      }
      @media (max-width: 750px) {
        .markdown-body {
          padding: 15px;
        }
      }
      {{style}}
    </style>
  </head>
  <body>
    <div class="markdown-body">
      {{content}}
    </div>
  </body>
</html>`;
