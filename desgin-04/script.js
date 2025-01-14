let timeLine = gsap.timeline();

timeLine.from("#nav h3", {
    y:-50,
    opacity: 0,
    delay:0.5,
    duration:0.4,
    stagger:0.2
})

timeLine.from("#main-content h1", {
    x:-500,
    opacity:0,
    duration:0.8,
    // delay:0.5,
    stagger:0.3
})

timeLine.from("#main-content img", {
    x:100,
    rotate:45,
    opacity:0,
    duration:0.8,
    stagger:0.5
})