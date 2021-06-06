let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log(666);
  let url = "https://www.souyidai.com/token/acquire";

  fetch("/list")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
