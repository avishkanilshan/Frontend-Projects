let btn = document.querySelector('.btn');

setTimeout(() => {
  btn.classList.add("hover");
}, 1000);

setTimeout(() => {
  btn.classList.remove("hover");
}, 3000);