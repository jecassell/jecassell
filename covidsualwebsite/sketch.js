let video;
let poseNet;
let pose;
let img;

// function preload(){
//   img = loadImage('https://imgur.com/a/esbbufT');
// }

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  img = loadImage('assets/puripuriprisoner.png');
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);

  if (pose) {
    noStroke();
    fill(255, 0, 0, 100)
    rect(pose.leftEye.x -60, pose.leftEye.y +20, 30, 30);

//stage left top mark
    beginShape();
    vertex(pose.leftEye.x -80, pose.leftEye.y +40);
    vertex(pose.leftEye.x -120, pose.leftEye.y +60);
    vertex(pose.leftEye.x -120, pose.leftEye.y +50);
    vertex(pose.leftEye.x -110, pose.leftEye.y +40);
    endShape();

//stage left bottom mark
    beginShape();
    vertex(pose.leftEye.x -70, pose.leftEye.y +120);
    vertex(pose.leftEye.x -110, pose.leftEye.y +100);
    vertex(pose.leftEye.x -110, pose.leftEye.y +110);
    vertex(pose.leftEye.x -100, pose.leftEye.y +120);
    endShape();

//stage right top mark
    beginShape();
    vertex(pose.leftEye.x -10, pose.leftEye.y +40);
    vertex(pose.leftEye.x +30, pose.leftEye.y +60);
    vertex(pose.leftEye.x +30, pose.leftEye.y +50);
    vertex(pose.leftEye.x +20, pose.leftEye.y +40);
    endShape();

//stage right bottom mark
    beginShape();
    vertex(pose.leftEye.x -20, pose.leftEye.y +120);
    vertex(pose.leftEye.x +20, pose.leftEye.y +100);
    vertex(pose.leftEye.x +20, pose.leftEye.y +110);
    vertex(pose.leftEye.x +10, pose.leftEye.y +120);
    endShape();



    // image(img, pose.leftEye.x -40, pose.leftEye.y -40, img.width / 25, img.height / 25);
    // image(img, pose.rightEye.x -40, pose.rightEye.y -40, img.width / 25, img.height / 25);

    // fill(255, 0, 0);
    // ellipse(pose.leftEye.x, pose.leftEye.y, 16, 16)
    // ellipse(pose.rightEye.x, pose.rightEye.y, 16, 16)
    // ellipse(pose.nose.x, pose.nose.y +50, 80);
  }
}
