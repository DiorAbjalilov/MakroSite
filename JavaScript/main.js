const body = document.querySelector(".body_wrap");
const bgImage = document.querySelector(".bg_image img");
const shape1 = document.querySelector(".cloud_1 img");
const shape2 = document.querySelector(".cloud_2 img");
const shape3 = document.querySelector(".cloud_3 img");
const leaf1 = document.querySelector(".leaf_1 img");
const leaf2 = document.querySelector(".leaf_2 img");

document.addEventListener("mousemove", function (e) {
  bgImage.style.left = -e.pageX / 60 + 660 + "px";
  bgImage.style.top = -e.pageY / 60 + 20 + "px";

  shape1.style.left = -e.pageX / 40 + 1200 + "px";
  shape1.style.top = -e.pageY / 40 + 110 + "px";

  shape2.style.left = -e.pageX / 40 + 700 + "px";
  shape2.style.top = -e.pageY / 40 + 110 + "px";

  shape3.style.left = -e.pageX / 40 + 620 + "px";
  shape3.style.top = -e.pageY / 40 + 280 + "px";

  leaf1.style.left = -e.pageX / 30 + 590 + "px";
  leaf1.style.top = -e.pageY / 30 + 430 + "px";

  leaf2.style.left = -e.pageX / 30 + 1285 + "px";
  leaf2.style.top = -e.pageY / 30 + 400 + "px";
});

const dotshape = document.querySelector("#shape25");
const shape4 = document.querySelector(".dot_image_1");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  const num = window.scrollY;
  if (num > 2) {
    if (num < 130) {
      dotshape.style.top = 400 + num + "px";
      if (num < 30) {
        bgImage.style.top = 20 + num + "px";
        bgImage.style.transition = "1s";
      }
    }
  }
  if (num > 1850 && num < 2515) {
    shape4.style.top = +num / 9 + "px";
    shape4.style.transition = "2.5s";
  }
});

const searchBox = document.querySelector(".body_wrap .search_boxs");
const serachOpen = document.querySelector(".signIcon .icons #open");
const opac = document.querySelector(".search_box_inner");
serachOpen.addEventListener("click", () => {
  searchBox.style.width = 100 + "%";
  searchBox.style.animationName = "search";
  opac.style.opacity = 1;
  searchBox.style.display = "block";
});
const closeSearch = document.querySelector(".search_box_inner .close_icon");
closeSearch.addEventListener("click", () => {
  searchBox.style.display = "none";
});
