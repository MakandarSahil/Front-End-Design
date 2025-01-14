gsap.from("#page1 .circle",{
  scale: 0,
  delay: 1,
  duration : 2,
  rotate:720
})

gsap.from("#page2 .circle",{
  scale: 0,
  delay: 1,
  duration : 2,
  rotate:720,
  scrollTrigger: {
    trigger : "#page2 .circle",
    scroller:"body",
    markers: true,
    start: "top 60%",
    end: "bottom 30%",
    scrub: true,
  }
})

gsap.from("#page3 .circle",{
  scale: 0,
  delay: 1,
  duration : 2,
  rotate:720,
  scrollTrigger: {
    trigger : "#page3 .circle",
    scroller:"body",
  }
})