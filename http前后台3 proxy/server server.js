let http = require("http");
let url = require("url");

let allowaAry = [
  "http://localhost:5500",
  "http://localhost:5501",
  "http://localhost:5502",
];

let server = http.createServer((req, res) => {
  if (req.method.toLowerCase() == "get") {
    console.log(url.parse(req.url, true).query);
  } else if (req.method.toLowerCase() == "post") {
    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
    });
    req.on("end", () => {
      console.log(str);
    });
  }

  res.end(JSON.stringify([100, 200, 3000, 400, 5000]));
});

server.listen(3000, () => {
  console.log("服务启动成功@", 3000);
});
