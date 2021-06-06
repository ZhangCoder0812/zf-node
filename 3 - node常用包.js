// path
let path = require("path");
console.log(path.resolve(__dirname)); //当前文件的绝对路径 /Users/mdzz/Desktop/node
console.log(path.resolve(__dirname, "./xxx.js")); // xxx.js的绝对路径 /Users/mdzz/Desktop/node/xxx.js
// join 结果上看没啥区别
console.log(path.join(__dirname));
console.log(path.join(__dirname, "./xxx.js"));
// 换成绝对目录就有区别了 resolve能识别绝对目录 join就是做拼接
console.log(path.resolve(__dirname, "/xxx.js")); // /xxx.js
console.log(path.join(__dirname, "/xxx.js")); // /Users/mdzz/Desktop/node/xxx.js


// url
let str = "http://baidu.com?a=1&b=2&c=3";
let url = require("url"); // 解析url
console.log(url.parse(str));
console.log(url.parse(str, true));
// 新版url写法
let res = new URL(str);
console.log(res);


// fs


// http
