const breakText = () => {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splitText = h1Text.split("");
  let clutter = "";

  let halfVal = Math.floor(splitText.length / 2)
  
  splitText.forEach((elem, index) => {
    if(index < halfVal){
      clutter += `<span class="a">${elem}</span>`
    }else{
      clutter += `<span class="b">${elem}</span>`
    }
  })

  h1.innerHTML = clutter;

};

breakText();

gsap.from("h1 .a", {
  y:80,
  opacity:0,
  delay:1,
  duration:0.6,
  stagger:0.15
})


gsap.from("h1 .b", {
  y:80,
  opacity:0,
  delay:1,
  duration:0.6,
  stagger:{each : 0.15, from:"end"}
})

