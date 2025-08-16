const backround = document.getElementById("backround");
const ctx = backround.getContext("2d");

backround.width = window.innerWidth;
backround.height = window.innerHeight;
//images

let mario = [
  { name: "mushroom.jpeg", hieght: 50, width: 40 },
  { name: "smalllmario.jpeg", hieght: 50, width: 40 },
  { name: "biiiigmario.jpeg", hieght: 50, width: 40 },
];
let imgselect = 0;


const intervalId = setInterval(() => {
  // console.log(imgselect)///
  ctx.clearRect(0, 0, backround.width, backround.height);

  const img = new Image(mario[imgselect].hieght, mario[imgselect].width);
  img.src = mario[imgselect].name;
    // img.src = mario[imgselect].name;

   imgselect += 1;
  if (imgselect > 2) {
    imgselect = 0;
  }
 
  // Draw at (x, y)
    img.onload = function() {
    ctx.drawImage(img,backround.width/2,backround.height/3); // Draw at position (0, 0)
  };

}, 500); // Run every second


