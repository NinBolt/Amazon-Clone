const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let movePer = 25.34;
let maxMove = 128.5;
let l = movePer;
let f = 0;

// mobile view

let mobile_view = window.matchMedia("(max-width: 700px)");

if (mobile_view.matches) {
  movePer = 50.36;
  maxMove = 856;
}

let right_mover = (ele, maxMove, movePer) => {
  f = f + movePer;

  for (const i of ele) {
    if (f > maxMove) {
      f = f - movePer;
    }
    i.style.left = "-" + f + "%";
  }
  l=movePer
};

let left_mover = (ele, movePer, len) => {
  l = l - movePer;
  for (const i of ele) {
    if (len > 1) i.style.left = "-" + l + "%";
  }
  f=0
};

let controls = document.querySelectorAll(".controls");
controls.forEach((control) => {
  control.addEventListener("click", () => {
    let spans = control.querySelectorAll("span");
    let productClass = control.parentElement.nextElementSibling.children[0].getAttribute("class");
    console.log(parent)
    let product = document.getElementsByClassName(productClass);
    let product_page = Math.ceil(product.length / 4);
    abc(spans, product, maxMove, movePer, product_page);
    console.log(product)
  })
})

function abc(span, product, maxMove, movePer, product_page) {
  span[1].onclick = () => {
    right_mover(product, maxMove, movePer);
  };
  span[0].onclick = () => {
    left_mover(product, movePer, product_page);
  };
}

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});