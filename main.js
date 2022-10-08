function setup() {
    video = createCapture(VIDEO);
    video.size(300, 200);
    canvas = createCanvas(650, 400);
    canvas.position(450, 200);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function draw() {
    background("#d0d0d0");
}
function modelloaded() {
    console.log("Model Loaded");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
   }
}