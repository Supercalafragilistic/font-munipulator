noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
//var x = document.getElementsById("bla3").value;    <span class="btn btn-info note">Type what u want on the canvas (word) <input type="text" class="form-control" id="bla3"></span>


function setup(){
video = createCapture(VIDEO);
video.size(550,550);
video.position(100,400);
canvas = createCanvas(550,500);
canvas.position(700,400);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function draw(){
    
    background('#808080');
    fill('#F5F5F5');
    stroke('#fff44f');
    
        text("Aarsh", noseX , noseY, difference);
        textSize(difference);
    document.getElementById("bla2").innerHTML =  difference + " px";
}

function modelLoaded(){
    console.log('PoseNet is intialized!')
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X = " + noseX + "and Nose Y = " + noseY);

    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.y;

    difference = floor(leftWristX - rightWristX);

    console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "The differece in both wrist is " + difference);
}
}