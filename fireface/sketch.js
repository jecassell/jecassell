let video;
let poseNet;
let pose;
let fire;

function preload() {
  face = loadModel('assets/face10.obj', true);
  fire = loadImage('assets/fire.gif');
}

function setup() {
  createCanvas(640, 480, WEBGL);
  noStroke();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function draw() {
  translate(-width/2, -height/2, 0);

  ambientLight(200, 200, 200);
  pointLight(255, 165, 0, width/4, height/4, 100);
//pointLight(R, G, B, x, y, z)

  image(video, 0, 0);
  if (pose) {
    let d = dist(pose.rightEar.x, pose.rightEar.y, pose.leftEar.x, pose.leftEar.y);
    push();
    translate(pose.nose.x, pose.nose.y, d/2);
    // translate(pose.nose.x, pose.nose.y);
    // rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // normalMaterial();
    // specularMaterial(60);
    texture(fire);
    // box(100);
    model(face);
    pop();
  }
}
