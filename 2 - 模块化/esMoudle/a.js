let a = 1;
let b = 2;

// 默认导出，外面导入的时候不能解构导入 ，名字随便写
export default {
  a,
  b,
};

// 外面可以使用解构导入 名字不能改
export let a1 = 1;
export let b1 = 2;
