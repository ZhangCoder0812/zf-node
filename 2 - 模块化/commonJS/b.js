function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

// 方式一：一个个导出
// exports.add = add;
// exports.minus = minus;

// 方式二：一个个导出
// module.exports.add = add;
// module.exports.minus = minus;

// 方式三：多加了一层 不建议使用
// exports.xxx = {
//   add,
//   minus,
// };

// 方式四：统一导出
module.exports = {
  add,
  minus,
};

// 错误方式
// exports = {
//   add,
//   minus,
// };
