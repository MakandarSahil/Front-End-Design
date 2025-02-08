let marqueeAnimation = () => {
  let isAnimating = false;

  window.addEventListener("wheel", (event) => {
    if (isAnimating) return;
    isAnimating = true;

    if (event.deltaY > 0) {
      gsap.to(".marquee", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 4,
        ease: "none",
        onComplete: () => {
          isAnimating = false;
        }
      });

      gsap.to(".marquee i", {
        rotate: 180,
        onComplete: () => {
          isAnimating = false;
        }
      });
    } else {
      gsap.to(".marquee", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
        onComplete: () => {
          isAnimating = false;
        }
      });

      gsap.to(".marquee i", {
        rotate: 0,
        onComplete: () => {
          isAnimating = false;
        }
      });
    }
  });
};

marqueeAnimation();
