let frog = {
  x: 180,
  y: 360,
  size: 40,
  color: "green"
};

let cars = [];
let colors = ["red", "green", "blue", "yellow", "purple"];
let sizes = [60, 80, 100, 120, 140];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 2; i++) {
    let car = {
      x: -80,
      y: 80 + i * 160,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    cars.push(car);
  }
}

function draw() {
  background("black");
  
  fill("grey");
  rect(0, 0, 400, 80);
  rect(0, 160, 400, 80);
  rect(0, 320, 400, 80);
  
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    fill(car.color);
    rect(car.x, car.y, car.size, car.size/2);
    car.x += (i+1)*2;
    if (car.x > width) {
      car.x = -car.size;
      car.size = sizes[Math.floor(Math.random() * sizes.length)];
      car.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }
  
  fill(frog.color);
  rect(frog.x, frog.y, frog.size, frog.size);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    frog.x -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    frog.x += 20;
  } else if (keyCode === UP_ARROW) {
    frog.y -= 20;
  } else if (keyCode === DOWN_ARROW) {
    frog.y += 20;
  }
}
