let fs = require("fs");
let path = require("path");

function rmdir(dir, cb) {
  fs.stat(dir, (err, stat) => {
    // 是文件就删除
    if (stat.isFile()) {
      fs.unlink(dir, cb);
    } else {
      // 是文件夹 读取内容
      fs.readdir(dir, (err, dirAry) => {
        // 拼接父级路径
        dirAry = dirAry.map((item) => path.join(dir, item));
        if (dirAry.length == 0) {
          // 空文件夹直接删除
          fs.rmdir(dir, cb);
        } else {
          let index = 0; // 记录删除文件的索引
          function done() {
            index++;
            // 当前文件夹中的文件全部删除之后 再删除该文件夹
            if (index == dirAry.length) {
              fs.rmdir(dir, cb);
            }
          }
          for (let i = 0; i < dirAry.length; i++) {
            let file_dir = dirAry[i];
            rmdir(file_dir, done);
          }
        }
      });
    }
  });
}

rmdir("./aaa", (err) => {
  if (!err) {
    console.log("删除成功");
  }
});
