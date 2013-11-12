异步加载 本地soso api模块文件.
## 实现异步加载 本地soso api模块文件.

#### 运行方法

    npm install -g nodemon
    npm install
    nodemon app.js

然后 访问 **http://localhost:3000/**.

各模块文件位于 mod 文件夹中. 修改模块文件后, nodemon 会自动重启 app.js

如果在模块文件中添加注释, 请使用 **块级注释** `/* */`, 不要使用行内注释 `// `,行内注释在压缩时,会出现错误.

如果需要使用soso线上模块文件,修改 `public/index.html` 第 **24** 行, 将`USE_LOCAL`置为`false`