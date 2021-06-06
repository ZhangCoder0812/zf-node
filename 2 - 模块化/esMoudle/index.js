import aa from "./a.js"; // .js后缀不能省略
import { a1, b1 } from "./a.js";
// import aa, { a1, b1 } from "./a.js"; // 同一个文件导入 可以写在一块
import * as xxx from "./a.js"; // 把a文件的所有导出作为xxx对象

console.log(aa);

console.log(a1, b1);

console.log(xxx);

/* 

import xx from './xxx' 对应的都是 export default 默认导出导出

import {} from './xxx' 对应的都是 export let xxx = 1


*/
