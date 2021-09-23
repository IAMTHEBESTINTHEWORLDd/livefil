function setup()
{
    canvas=createCanvas(455,355);
    canvas.position(105,150);

    chimera=createCapture(VIDEO);
    chimera.hide()
    posinet=ml5.poseNet(chimera, MODALLODAD);
    posinet.on('pose', GOTDAPOSES);
}

function GOTDAPOSES(results){
if(results.length>0){
    console.log(results);
    console.log("NOSY X="+results[0].pose.nose.x);
    console.log("NOSY Y="+results[0].pose.nose.y);
    Nose_x=results[0].pose.nose.x;
    Nose_y=results[0].pose.nose.y;
}
}

 function MODALLODAD(){
     console.log("THE ML5 FOR THE MESSAGE THAT THE POSENET IS LODED: "+ml5.version);
 }


function draw(){
    image(chimera, 0, 0, 500, 400);
}


function savee(){
    savee("live picture")
}