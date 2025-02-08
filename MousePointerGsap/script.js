let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

let Xcordinate = 0;
let Ycordinate = 0;

main.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.x,
    y:e.y,
    duration:1,
    ease: "back.out"
  })
})

image.addEventListener('mouseenter', (e)=> {
  // console.log("heyy")
  cursor.innerHTML = "View More"
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "gray"
  })
})

image.addEventListener('mouseleave', (e)=> {
  // console.log("bye")
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale:1,
    backgroundColor: "#ffffff"
  })
})