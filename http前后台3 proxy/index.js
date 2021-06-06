let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log(666);

  fetch("/list?q=123&ee=2345")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  fetch("/detail", {
    credentials: "include", // 跨域请求携带资源凭证
    method: "post",
    body: "qq=123&rrr=235&ttt=6666",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
