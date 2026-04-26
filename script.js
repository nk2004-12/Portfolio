// Cursor animation
var page1Content = document.querySelector("#page1-content");
var Cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dets) {
  gsap.to(Cursor, {
    x: dets.x,
    y: dets.y
  });
});

page1Content.addEventListener("mouseenter", function () {
  gsap.to(Cursor, {
    scale: 1,
    opacity: 1
  });
});

page1Content.addEventListener("mouseleave", function () {
  gsap.to(Cursor, {
    scale: 0,
    opacity: 0
  });
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Locomotive Scroll setup
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Swiper setup
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  speed: 1200
});

// Loader animation
var tl = gsap.timeline();
tl.from("#loder h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})
  .to("#loder h3", {
    x: -40,
    opacity: 0,
    duration: 1
  })
  .to("#loder", {
    opacity: 0
  })
  .to("#loder", {
    display: "none"
  })
  .from("#page1-content h3 span", {
    y: 1,
    opacity: 0,
    stagger: 0.2,
    duration: 0.3
  });

// SplitText animation for h1
let split = new SplitText("#page2 h1", { type: "chars" });

gsap.from(split.chars, {
  y: 80,
  duration: 0.8,
  delay: 0.7,
  stagger: 0.05,
  opacity: 0
});
