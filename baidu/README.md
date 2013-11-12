## 实现从本地baidu api加载模块

#### 运行方法

    npm install -g nodemon
    npm install
    nodemon app.js

然后 访问 **http://localhost:3000/**.

各模块文件位于 mod 文件夹中. 修改模块文件后, nodemon 会自动重启 app.js

如果在模块文件中添加注释, 请使用 **块级注释** `/* */`, 不要使用行内注释 `// `,行内注释在压缩时,会出现错误.

如果需要使用百度线上模块文件,修改 `public/api.js` 第 **1593** 行,将本地地址注释, 将线上地址恢复即可.

如果需要恢复使用localstorage, 修改 `public/api.js` 第 **1619** 行, 将注释去掉即可.