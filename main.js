Webcam.set({
width:300,
height:300,
image_format:'jpg',
jpg_quality:90,

constraints:{
    facingMode:"environment"
}
});
camera=document.getElementById("camera")
Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="capture_image"src="' +data_uri+'">';

    });
}
function modelLoaded(){
    console.log('ml5 version:',ml5.version);
}
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function take_check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("span_1").innerHTML=results[0].label;

    }
   
}
