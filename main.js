function preload()
{

}

function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.size(400,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  
} 

function gotPoses(results)
{

}

function modelLoaded()
{
  console.log('poseNet is initialized');
}