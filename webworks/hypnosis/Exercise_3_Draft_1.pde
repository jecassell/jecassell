int count = 99;

float[] posX = new float[count]; 
float[] posY = new float[count];

float[] speedX = new float[count];
float[] speedY = new float[count];

float[] sizeW = new float[count];
float[] sizeH = new float[count];

int[] colorsR = new int[count];
int[] colorsG = new int[count];
int[] colorsB = new int[count];
int[] alpha = new int[count];

void setup(){
//  fullScreen();
  size(600,600);
  background(255);
  noStroke();
  
  for(int i=0; i<posX.length; i++){
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-5,5);
    speedY[i] = random(-5,5);
    sizeW[i] = random(20,75);
    sizeH[i] = random(20,100);
    colorsR[i] = int(random(0,255));
    colorsG[i] = int(random(0,255));
    colorsB[i] = int(random(0,255));
    alpha[i] = int(random(50,255));
  }
}

void draw(){
  fill(255,20);
  rect(0,0,width,height);
  
  for(int i=0; i<posX.length; i++){
    if (posX[i] < sizeW[i]/2 || posX[i] > width-sizeW[i]/2 || posY[i] < sizeW[i]/2 || posY[i] > height-sizeW[i]/2){
      speedX[i] = -speedX[i];
      speedY[i] = -speedY[i];
    }
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    fill(colorsR[i],colorsG[i],colorsB[i],alpha[i]);
    ellipse(posX[i], posY[i], sizeW[i], sizeH[i]);
  }
}
