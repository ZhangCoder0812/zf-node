/* 

  缓冲区Buffer 是暂时存放输入输出数据的一段内存

  使用：new Buffer(size) size字节数

  字节(byte) 一个字节使用8位二进制表示
         一个汉子3个字节

*/

//let b1 = new Buffer(12); // 12 大小
//console.log(b1);
//b1.write("珠峰", 0, 6, "utf-8"); // 填写的内容,起始位置,写多少个字节,编码格式
//console.log(b1);
//console.log(b1.toString()); // toString 查看具体内容

// 新写法
let b2 = Buffer.alloc(12); // 创造了一个12个字节大小的buffer

let b3 = Buffer.alloc(12, "珠峰"); // 内存大 内容少 会重复填充
console.log(b3.toString()); // 珠峰珠峰

let b4 = Buffer.alloc(11, "珠峰培训"); // 内存小 内容多 会截取出现乱码
console.log(b4.toString()); // 珠峰培�

// from 转为buffer
let b5 = Buffer.from("珠峰培训"); //
console.log(b5); // <Buffer e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad> 共3*4=12个字节
console.log(b5.toString()); // 珠峰培训

// concat 合并buffer
let b6 = Buffer.from("珠峰");
let b7 = Buffer.from("培训");
let cb = Buffer.concat([b6, b7]);
console.log(cb.toString()); // 珠峰培训

// slice 截取buffer 包前不包后
console.log(cb.slice(0, 3).toString()); // 珠

// copy 复制
let b8 = Buffer.alloc(12);
let b9 = Buffer.from("珠峰");
b9.copy(b8, 0, 0, 3); // 把9复制到b8中 从b8的哪个位置开始复制,从b9的开始位置,到b9的结束位置
console.log(b8.toString()); // 珠
