// let http = require("http");
// let mime = require("mime"); // 获取文件类型
// let fs = require("fs");
// let pfs = fs.promises;

// let server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url == "/favicon.ico") {
//     return res.end("");
//   }
//   // 拼接资源文件路径
//   if (req.url == "/") req.url = "/index.html";
//   let filePath = "../http前后台1" + req.url;
//   res.setHeader("Content-Type", mime.getType(filePath)); //设置响应头
//   // 方式一：读取资源文件
//   // pfs
//   //   .readFile(filePath)
//   //   .then((data) => {
//   //     res.end(data);
//   //   })
//   //   .catch((err) => {
//   //     res.end(err);
//   //   });

//   // 方式二：也可用流的方式读取文件 request是可读流 response是可写流
//   // fs.createReadStream(filePath).pipe(res)

//   if (req.url == "/list") {
//     // 处理接口
//     fs.createReadStream("../json/list.json").pipe(res);
//   } else {
//     // 处理资源文件
//     fs.createReadStream(filePath).pipe(res);
//   }
// });

// let port = 8080;
// server.listen(port, () => {
//   console.log("服务启动成功@", port);
// });

// server.on("error", function (err) {
//   if (err.code === "EADDRINUSE") {
//     server.listen(++port);
//   }
// });

// express 写法
let express = require("express");
let app = express();
app.listen(8080, () => {
  console.log("服务启动成功");
});

app.use(express.static("../http前后台1"));
// 给前段设置cookie 这里是同域设置cookie 前段请求地址要是ip不能是localhost 
// 否则种植不上
app.use((req, res, next) => {
  res.header('set-cookie', 'aaa=123')
  next()
})

app.get("/list", function (req, res) {
  res.send([1, 2, 3, 4, 5]);
});
