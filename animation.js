const backround = document.getElementById("backround");
const ctx = backround.getContext("2d");

backround.width = window.innerWidth;
backround.height = window.innerHeight;
//images
let mario = [{mushroom},{smalllmario},{biiiigmario}]
let imgselect = 0
for(let i = 0 ; i < 999999 ; i ++ ){

setTimeout(() => {
  imgselect + 1   
}, "5000"); 
}
//animate
function animate() {
  ctx.clearRect(0, 0, backround.width, backround.height);
  // Animation code goes here
  let marioz = new Image(0,0)
marioz.src = `${mario[imgselect]}`
if (imgselect == 2 ){
    imgselect = 0
}

  
  // Request the next frame
  requestAnimationFrame(animate);
}