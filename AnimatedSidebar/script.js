let menu = document.querySelector("#nav i")
let cross = document.querySelector("#full i")

let tl = gsap.timeline()

tl.to("#full", {
  right:0,
  duration:0.3
})

tl.from("#full h4", {
  x:150,
  stagger:0.3,
  opacity:0,
  duration:0.4
})

tl.from("#full i", {
  opacity:0,
  duration:0.3
})

tl.pause()

menu.addEventListener('click', (e)=> {
  tl.play()
})
cross.addEventListener('click', (e) => {
  console.log("hii")
  tl.reverse()
})