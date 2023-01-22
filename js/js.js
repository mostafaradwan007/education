let li = document.querySelectorAll(".one a");
li.forEach(function (el) {
  el.onclick = function () {
    li.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

// document.querySelector("button").onclick=function() {
//   document.getElementById("demo").style.direction = "rtl";
  
// }