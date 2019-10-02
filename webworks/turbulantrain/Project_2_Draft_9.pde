circle myCircle1;
circle myCircle2;
circle myCircle3;
float noiseVal;
float noiseScale=0.002;
float yoff = 0.0;

void setup(){
  size(1920,1080);
  background(0);
  myCircle1 = new circle(color(int(255),int(255),int(255)),300,580,3,3);
  myCircle2 = new circle(color(int(255),int(255),int(255)),200,480,3,3);
  myCircle3 = new circle(color(int(255),int(255),int(255)),400,680,3,3);
  rectMode(CENTER);
}

void draw(){

  println(frameCount);

  fill(255);
  beginShape();
  float xoff = 0;
  for(float x = 0; x <= width; x += 10){
    float y = map(noise(xoff, yoff), 0, 1, 1000,300);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  myCircle1.jcUpdate();
  myCircle1.jcDisplay();
  myCircle1.jcWiggle();
  myCircle1.jcchangeColor();
  
  myCircle2.jcUpdate();
  myCircle2.jcDisplay();
  myCircle2.jcWiggle();
  myCircle2.jcchangeColor();
  
  myCircle3.jcUpdate();
  myCircle3.jcDisplay();
  myCircle3.jcWiggle();
  myCircle3.jcchangeColor();
  
  if(frameCount > 30){
    fill(0,255,0);
    rect(300, 600, 50, 50);
  }
  if(frameCount > 352){
    fill(0,255,0);
    rect(1400, 600, 50, 50);
  }
  if(frameCount > 694){
    fill(0,255,0);
    rect(600, 600, 50, 50);
  }
  if(frameCount > 1069){
    fill(0,255,0);
    rect(1700, 600, 50, 50);
  }
  if(frameCount > 1426){
    fill(0,255,0);
    rect(800, 600, 50, 50);
  }
  if(frameCount > 1769){
    fill(0,255,0);
    rect(1850, 600, 50, 50);
  }
  if(frameCount > 1841){
    fill(0,255,0);
    rect(50, 600, 50, 50);
  }
  if(frameCount > 2141){
    fill(0,255,0);
    rect(1100, 600, 50, 50);
  }
  if(frameCount > 2455){
    fill(0,0,255);
    rect(960, 540, 300, 300);
  }

//if(frameCount<3400){
//  saveFrame("frames/proj2-#####.png");
//}else{
//  exit();
//}
}

class circle{
  color c;
  float xpos;
  float ypos;
  float xspeed;
  float yspeed;

  circle(color tempC, float tempXpos, float tempYpos, float tempXspeed, float tempYspeed){
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
    yspeed = tempYspeed;
  }
  
  void jcDisplay(){
    stroke(0);
    fill(c);
    ellipse(xpos,ypos,50,50);
  }
  
  void jcUpdate(){
    xpos = xpos + xspeed;
    if(xpos > width){
      xpos = 0;
    }
    ypos = ypos +yspeed;
    if(ypos > height){
      ypos = 0;
    }
  }
  
  void jcWiggle(){
    xpos += int(random(-2,2));
    ypos += int(random(-2,2));
  }

  void jcchangeColor(){
    if(frameCount > 30){
      c = color( int(random(255)),int(0),int(0));
    }
    if(frameCount > 352){
      c = color( int(random(255)),int(255),int(0));
    }
    if(frameCount > 694){
      c = color( int(random(255)),int(0),int(255));
    }
    if(frameCount > 1069){
      c = color( int(random(255)),int(255),int(255));
    }
    if(frameCount > 1426){
      c = color( int(random(255)),int(0),int(255));
    }
    if(frameCount > 1769){
      c = color( int(random(0)),int(255),int(255));
    }
    if(frameCount > 1841){
      c = color( int(random(0)),int(0),int(255));
    }
    if(frameCount > 2141){
      c = color( int(random(255)),int(0),int(0));
    }
  }
}
