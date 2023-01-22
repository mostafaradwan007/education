let li = document.querySelectorAll(".one a");
li.forEach(function (el) {
  el.onclick = function () {
    li.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
// let i = document.querySelector(".ac").onclick=function () {
//   document.querySelector("ul.one").style.display = "flex";
//   document.querySelector("ul.one").style.direction = "column";
//   document.querySelector("ul.one").style.position = "absolute";
//   document.querySelector("ul.one").style.top = "100%";
//   document.querySelector("ul.one").style.left = "0";
//   document.querySelector("ul.one").style.width = "100%";
// };
// console.log(i)
// document.querySelector("button").onclick=function() {
//   document.getElementById("demo").style.direction = "rtl";
  
// }