/* 

  流 是一组有序的字节数据

 */

let fs = require("fs");

//创造可读流
let res = fs.createReadStream("./xxx.txt");
let str = "";

res.on("open", function (data) {
  console.log("打开文件：", data);
});
res.on("data", function (thunk) {
  // thunk 一段段数据流
  console.log("thunk：", thunk);
  res.pause(); // 暂停读取
  str += thunk; // 大文件肯能需要多好几段
});
setTimeout(() => {
  res.resume(); // 开启读取
}, 1000);
res.on("end", function () {
  console.log("data：", str);
});

// 创造可写流
let res1 = fs.createWriteStream("./xxx3.txt");
for (let i = 0; i < 5; i++) {
  res1.write(i + ""); // 写的内容必须是 buffer / string
}
// res1.end(); 避免缓存区内容过多 先写入一部分

// pipe 连接 可读流 可写流
let res3 = fs.createReadStream("./xxx1.txt");
let res4 = fs.createWriteStream("./xxx2.txt");
res3.pipe(res4); // 把xxx1内容写入到xxx2中 将可读流数据推送到可写流
