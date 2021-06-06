/* 

  node 就是一个提供js在服务器上运行的环境

  require/module/exports/__dirname/__filename  不是node的全局变量
  每一个模块都有 require/module/exports/__dirname/__filename 私有内置变量

  require.cache require有缓存 下次用的时候不用再导入 直接使用缓存
  __dirname 当前文件所在文件夹的绝对路径
  __filename 当前文件所在的绝对路径

  nodemon 执行js文件 修改代码之后不用每次重新执行
          cnpm i nodemon -g
          nodemon index.js
  
  node 的全部变量有 global / process

  console.log( process.platform ) 当前执行文件所在系统
  console.log( process.arg ) 结果是一个数组 [node所在路径，当前执行文件所在路径] 
                             一般用不到 可用来获取命令行参数

  commander 第三方插件 用来获取命令行参数

  process.env.xxx = 123
  console.log(process.env.xxx)

*/
