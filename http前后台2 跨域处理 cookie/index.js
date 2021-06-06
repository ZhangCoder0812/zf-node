let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log(666);

  fetch("http://localhost:8080/list?q=123&ee=2345")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  fetch("http://localhost:8080/detail", {
    credentials: "include", // 跨域请求携带资源凭证
    method: "post",
    body: "qq=123&rrr=235&ttt=6666",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
