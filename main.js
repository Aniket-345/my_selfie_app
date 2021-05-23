var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak()
}

function speak(){
    var synth= window.speechSynthesis;
    text= "taking selfie in 5, 4, 3, 2, 1,";
    var speak_data=new SpeechSynthesisUtterance(text);
    synth.speak(speak_data);
    
    if(content=="take my selfie"){
        Webcam.attach(cam);
        setTimeout(function(){
            TakeSnapShot()
        },4000)
    }
    
    


}

Webcam.set({
    width:320,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
})

cam=document.getElementById("camera")

function TakeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img src="+data_uri+" id='captured_image'/>"

    })
    save()
}

function save(){
    anchor= document.getElementById("save");
    img= document.getElementById("captured_image").src;
    anchor.href=img;
    anchor.click();
}