nose_x=0;
nose_y=0;
function preload(){
 mustache_nose=loadImage('https://i.postimg.cc/vmtFV4Nt/mustache-student-math-favorite-for-friday-the-the-1.png');
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600); 
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded(){
    console.log("model_loaded");
}
function draw(){
   image(video, 0, 0, 600, 600 );
   image(mustache_nose, nose_x-50, nose_y-5, 100, 70);
}
function gotposes(results){
    if (results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x= " + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);
    }
}
function take_snapshot(){
    save("my_mustache_image.png");
}