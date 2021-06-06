let http = require("http");
let url = require("url");

let allowaAry = [
  "http://localhost:5500",
  "http://localhost:5501",
  "http://localhost:5502",
];

let server = http.createServer((req, res) => {
  // 允许所有域 res.setHeader("Access-Control-Allow-Origin", '*')

  // 允许指定域名
  if (allowaAry.includes(req.headers.origin)) {
    // 给前段种植 cookie  前段发送请求时会自动带着cookie
    // 跨域不会携带cookie资源凭证 前段可以手动设置携带资源凭证
    // 前段设置携带资源凭证后 这里设置源不能是 * 。写* 就不允许携带资源凭证
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    // 前段携带资源凭证后 后段也要设置允许资源凭证
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  }
  if (req.method.toLowerCase() == "get") {
    // 获取get传参
    console.log(url.parse(req.url, true).query);
  } else if (req.method.toLowerCase() == "post") {
    // 处理post传参
    // 若要接受请求体中的参数的时候 需要绑定 data 事件
    let str = "";
    req.on("data", (chunk) => {
      // console.log(chunk.toString())
      str += chunk;
    });
    req.on("end", () => {
      console.log(str);
    });
  }

  res.end(JSON.stringify([100, 200, 3000, 400, 5000]));
});

server.listen(8080, () => {
  console.log("服务启动成功@", 8080);
});
