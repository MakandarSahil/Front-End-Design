let pageOneAnimation = () => {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button, nav .menu", {
    opacity: 0,
    y: -30,
    duration: 0.3,
    delay: 0.3,
    stagger: 0.1,
  });

  tl.from(".centerPart1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".centerPart1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".centerPart1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".centerPart2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "-=0.5"
  );

  tl.from(".section1Bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    
  });
};

pageOneAnimation();

let pageTwoAnimation = () => {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller:"body",
      start: "top 30%",
      end: "top -50%",
      scrub:2
    },
  });
  
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  
  tl2.from(".elem.line1.left", {
    x:-300,
    opacity:0,
    duration:1,
  }, "anime")
  
  tl2.from(".elem.line1.right", {
    x:300,
    opacity:0,
    duration:1,
  }, "anime")
  
  tl2.from(".elem.line2.left", {
    x:-300,
    opacity:0,
    duration:1,
  },"amime2")
  
  tl2.from(".elem.line2.right", {
    x:300,
    opacity:0,
    duration:1,
  },"amime2")
  
  tl2.from(".elem.line3.left", {
    x:-300,
    opacity:0,
    duration:1,
  },"amime3")
  
  tl2.from(".elem.line3.right", {
    x:300,
    opacity:0,
    duration:1,
  },"amime3")
}

pageTwoAnimation();


let pageThreeAnimation = () => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller:"body",
      start: "top 60%",
      end: "top -60%",
    },
  });
  
  tl3.from(".contact", {
    y: 60,
    opacity: 0,
    duration: 0.6,
  });
  
  tl3.from(".contactForm", {
    opacity: 0,
    duration: 1.5,
  },)
  
  tl3.from("footer .footerDiv", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    y:200
  })
}

pageThreeAnimation();
