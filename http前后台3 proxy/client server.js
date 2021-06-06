let express = require("express");
let http = require("http");

let app = express();
app.listen(8081, () => {
  console.log("服务启动成功");
});

app.use(express.static("../http前后台1"));
app.use((req, res, next) => {
  res.header("set-cookie", "aaa=123");
  next();
});

app.get("/list", function (req, res) {
  // proxy 原理 前段80801请求list 后台去请求别的服务器的3000 list接口 然后将结果返回给前段
  // 服务器于服务器之前没有跨域
  let str = "";
  let result = http.request(
    {
      host: "localhost",
      port: 3000,
      method: "POST",
    },
    (res2) => {
      res2.on("data", (thunk) => {
        console.log(thunk);
        str += thunk;
      });
      res2.on("end", () => {
        res.end(str);
      });
    }
  );
  result.write(JSON.stringify({ aaa: 123 }));
  result.end();
});
