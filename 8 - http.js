let http = require("http");
let server = http.createServer((request, response) => {
  // 有请求过来时会触发这个回调函数
  console.log("请求来了");
  console.log(request.url);
  response.end("ok"); // 不响应的话浏览器会一直转圈等待响应
});

let port = 8080;
server.listen(port, () => {
  console.log("服务启动成功@", port);
});

// 启动服务出错会触发
server.on("error", function (err) {
  // 端口占用 重新启动别的端口
  if (err.code === "EADDRINUSE") {
    server.listen(++port);
  }
});
