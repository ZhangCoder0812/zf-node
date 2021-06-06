/* 

  无感知登陆：前段只需要点击登陆。后段来种植cookie。下次发请求自动携带cookie。

  token有感知登陆：登陆之后后段返回token，下次请求前段设置到请求头中。

  cookie session token 区别。
   - cookie 是前端的 4k左右 有后端直接种植到浏览器中
   - session 是后端用来存储数据的一个地方 有过期时间
     类似于前端cookie session 依赖 cookie
   - token jwt生成的字符串 前端一般存在localStorage中 后端不存  
 
*/
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.listen(3001, () => {
  console.log('服务启动了@',3001);
});

app.use(express.static("../login模型"));
app.use(bodyParser.json());
let userqqid = "123";

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name == "zhufeng") {
    userqqid = req.body.name + "qqqwwwweree"; //这里随便造的一个cookie标识
    res.header("set-cookie", `userqqid=${userqqid}`);
    res.send(JSON.stringify({ msg: "ok" }));
  }
});

app.get("/list", (req, res) => {
  console.log(req.headers.cookie);
  let id = (req.headers.cookie || "").match(/userqqid=(.+)/); // userqqid=zhufengqqqwwwweree
  if (id && id[1] == userqqid) {
    res.send("[111,22,33]");
  } else {
    res.send(JSON.stringify({ msg: "未登录" }));
  }
});
