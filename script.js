// const scroller = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// })
// gsap.registerPlugin(ScrollTrigger);

// page 1 (gsap)

gsap.from("#img1",{
    y:100,
    ease: Expo.easeInOut,
    duration:1,
    opacity:0,
    delay:0.4,
})
gsap.from("#img2",{
    x:80,
    ease: Expo.easeInOut,
    duration:1,
    opacity:0,
    delay:0.4,
})
gsap.from("#img3",{
    y:-70,
    ease: Expo.easeInOut,
    duration:1,
    opacity:0,
    delay:0.4,
})
gsap.from("#page1 h1",{
    ease: Expo.InOut,
    duration:1,
    opacity:0,
    delay:0.4,
})
gsap.from("#find-out",{
    ease: Expo.easeInOut,
    duration:1,
    opacity:0,
    delay:0.4,
})

// page 2(gsap)

gsap.from("#page2 #upper", {
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    y:25,
    scrollTrigger:{
      trigger: "#page2",
      scroller: "body",
      start:"top 90%",
      // markers: true
    }
})
gsap.from("#page2 h1", {
  opacity:0,
  duration:1.5,
  delay:0.5,
  ease:Expo.easeInOut,
  y:25,
  scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    start:"top 90%",
    // markers: true
  }
})
gsap.from("#page2 #about-us", {
  opacity:0,
  duration:1,
  delay:1,
  ease:Expo.easeInOut,
  y:25,
  scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    start:"top 80%",
    // markers: true
  }
})

// page 3 (gsap)

gsap.from("#page3 #left", {
  opacity:0,
  duration:2,
  delay:0.5,
  ease:Expo.easeInOut,
  y:40,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start:"top 70%",
    // markers: true
  }
})
gsap.from("#page3 #right", {
  opacity:0,
  duration:2,
  delay:0.5,
  ease:Expo.easeInOut,
  y:40,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start:"top 80%",
    // markers: true
  }
})
gsap.from("#page3 #right #learn", {
  opacity:0,
  duration:2,
  // delay:2,
  ease:Expo.easeInOut,
  y:40,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start:"top 80%",
    // markers: true
  }
})

// page 4 (gsap)

gsap.from("#page4 #top", {
  opacity:0,
  duration:2,
  ease:Expo.easeInOut,
  y:40,
  scrollTrigger:{
    trigger: "#page4",
    scroller: "body",
    start:"top 80%",
    // markers: true
  }
})
gsap.from("#page4 #brands", {
  opacity:0,
  duration:2,
  delay:1,
  ease:Expo.easeInOut,
  y:40,
  scrollTrigger:{
    trigger: "#page4",
    scroller: "body",
    start:"top 80%",
    // markers: true
  }
})











// page 6 {swiper js}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction:false,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });