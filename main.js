Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture" src="'+data_uri+'"/>';
    });

}

console.log('m15 version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4xnuN2s3g/model.json',modelLoaded);

function modelLoaded()
{
console.log('Model Loaded!😊😊😊');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak1= "The first prediction is "+ prediction_1;
    speak2= "And the second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);
}
































