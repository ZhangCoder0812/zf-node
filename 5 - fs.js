/* 

  fs 内置模块 用来读写文件的
  凡是带有Sync字段的方法都是同步的 不带的都是异步的

*/

let fs = require("fs");
let pfs = fs.promises;
let path = require("path");
let txt_path = path.resolve(__dirname, "./xxx.txt");

// 异步读取要使用回调函数形式 第一个参数是错误对象 如果err有值则代表读取失败
fs.readFile(txt_path, "utf-8", function (err, data) {
  if (!err) {
    console.log("读取成功：", data);
  } else {
    console.log("读取失败：", err);
  }
});

// 同步读取
let res = fs.readFileSync(txt_path, "utf-8");
console.log("Sync--", res);

// fs的promise管理
pfs.readFile(txt_path, "utf-8").then((data) => {
  console.log("pfs：", data);
});

// 写文件 会覆盖原文件 没有会创建 异步写
let wPath = path.resolve(__dirname, "./xxx1.txt");
fs.writeFile(wPath, "lbj", "utf-8", (err) => {
  if (!err) {
    console.log("写文件 成功");
  } else {
    console.log("写文件失败");
  }
});

//同步写 let res  = fs.writeFileSync(wPath)

// appendFile 添加内容 writeFile会覆盖原内容
fs.appendFile(wPath, "wade", "utf-8", (err) => {
  if (!err) {
    console.log("添加 成功");
  } else {
    console.log("添加 失败");
  }
});

// 自己实现appendFile
function myAppend(url, data, options, cb) {
  fs.readFile(url, "utf-8", (err, val) => {
    if (!err) {
      fs.writeFile(url, data + val, options, cb);
    }
  });
}

myAppend(wPath, "china", "utf-8", (err) => {
  if (!err) {
    console.log("myAppend添加 成功");
  } else {
    console.log("myAppend添加 失败");
  }
});

// unlink 删除文件
// let path2 = path.resolve(__dirname, "./xxx2.txt");
// fs.unlink(path2, (err) => {
//   if (!err) {
//     console.log("删除成功");
//   } else {
//     console.log("删除失败");
//   }
// });

// mkdir 创建文件夹 创造多级文件夹 './xxx/www' 前提父文件夹要存在
fs.mkdir("./xxx", (err) => {
  if (!err) {
    console.log("创建成功");
  } else {
    console.log("创建失败");
  }
});

// 创造多级文件夹 recursive 不用考虑父文件夹是否存在
fs.mkdir("./aaa/bbb", { recursive: true }, (err) => {});

// mkdir 删除文件夹 只能删除空的文件夹
// fs.rmdir("./xxx", (err) => {});

// 读文件夹
fs.readdir("./2 - 模块化", (err, data) => {
  console.log(data);
  // 判断是不是文件
  //   data.forEach((item) => {
  //     fs.stat(path.resolve(__dirname, item), (error, stat) => {
  //       console.log(item, "->", stat.isFile());
  //     });
  //   });
});
