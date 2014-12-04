var solar, bg, earth, moon;
function setup() {
    createCanvas(1000, 1000);
  solar = loadImage("solar.png");
  bg = loadImage("bg.png");
  earth = loadImage("earth.png");
  moon = loadImage("moon.png");
  man = loadImage("man.png");
}


function draw() {

  background(bg);

  var duration0 = 7000;
  var timing0 = (new Date()%duration0)/duration0;
  var duration1 = 6000;
  var timing1 = (new Date()%duration1)/duration1;
  var duration2 = 5000;
  var timing2 = (new Date()%duration2)/duration2;
  var duration3 = 4000;
  var timing3 = (new Date()%duration3)/duration3;
  var duration4 = 3000;
  var timing4 = (new Date()%duration4)/duration4;

  //지구라인
  noFill();
  stroke(255);
  ellipse(500,500,600,600)

  //달타원라인1
  noFill();
  stroke(255);
  ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        100,
        300);

  //달타원라인2
  noFill();
  stroke(255);
  ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        300,
        150);

  //달라인
  noFill();
  stroke(255);
  ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        200,
        200);

  //solar
  image(solar,250,250,500,500);

 //man
 var duration = 5000;
 var timing = (new Date()%duration)/duration;

  image(img4 , 500-60/2 + Math.cos(timing*2*PI)*300+ Math.cos(timing*2*PI)*100,           // x좌표
        500-60/2 + Math.sin(timing*2*PI)*300+ Math.cos(timing*2*PI)*100, // y좌표
        60,                                  // width
        60);                                 // height 

  //달1
  image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing2*4*PI)*150-100,
    500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing2*4*PI)*70-100,200,200);

  image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing3*4*PI)*100-100,
    500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing3*4*PI)*100-100,200,200);

  image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing4*4*PI)*50-100,
    500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing4*4*PI)*150-100,200,200);

  //지구
  image(earth,500 + Math.cos(timing1*2*PI)*300-150,500 + Math.sin(timing1*2*PI)*300-150,300,300);
}