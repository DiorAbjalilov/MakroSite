const main = document.querySelector("main");
const article = document.querySelectorAll("article");
const span = document.querySelectorAll("span");
let item = 0;
const slider = () => {
  item += 2;
  if (item === article.length * 2) {
    item = 0;
  }
  main.style.cssText = `
     transform: translateX(-${item}0%);
    `;
};
// const BoxShadow = (a) => {
//   span.forEach((span, index) => {
//     if (index === a / 2) {
//       span.classList.add("box");
//     } else {
//       span.classList.remove("box");
//     }
//   });
// };
setInterval(() => {
  slider();
  BoxShadow(item);
  return () => {
    clearInterval(() => {
      slider();
      BoxShadow(item);
    });
  };
}, 4000);

// span.forEach((span, index) => {
//   span.onclick = (e) => {
//     e.target.classList.add("active");
//     main.style.cssText = `
//      transform: translateX(-${index * 2}0%);
//     `;
//     item = 2 * index;
//     BoxShadow(item);
//     (() => {
//       setTimeout(() => {
//         e.target.classList.remove("active");
//       }, 300);
//     })();
//   };
// });
