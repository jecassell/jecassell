function setup(){

  createCanvas(500,500);
  background(192);
  angleMode(DEGREES);

}

function draw(){

  var counter1 = 0;
  var counter2 = 0;
  var s = second();
  var m = minute();
  var h = hour();
  var past12;
  var hour12;
  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    t;
  // let mm = map(m, 0, 59, -90, 270);

//AM PM console and color
  if (h==12){
    hour12 = h;
    past12 = "PM"
    console.log("Noon");
  } else if (h==0){
    hour12 = 12;
    past12 = "AM";

  }else{
  if (h>11){
    hour12 = h-12;
    past12 = "PM";
    console.log("Afternoon");
  } else {
    hour12 = h;
    past12 = "AM";
  }
  }

  background(192);

//Seconds Meter
push();
noStroke();
for (let i = 0; i < 6; i++){
  for (let j = 0; j < 10; j++){
    counter1++;
    if(counter1 > s+1){
      fill(100);
    } else {
      fill(255);
    }
      ellipse(i*40+20, j*40+20, 20, 20);
  }
}
pop();

//Minutes Meter
push();
noStroke();
for (let i = 0; i < 6; i++){
  for (let j = 0; j < 10; j++){
    counter2++;
    if(counter2 > m+1){
      fill(100);
    } else {
      fill(255);
    }
      ellipse(i*40+280, j*40+20, 20, 20);
  }
}
pop();

//Hours Meter
  for (let i = 0; i < 23; i++){
    if(i<h){
      if (past12 == "PM"){
        fill(0,0,80);
      } else {
        fill(255, 153, 0);
      }
    } else {
      fill(100);
    }
      rect(i*((width-6)/23)+8, height/1.20, 10, 60);
  }


}

function makeSquare(){
  fill(0);
  noStroke();
  rect(0, 0, 105, 105);
}
