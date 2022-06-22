var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('envelope.gif',function(Img){
 image_object=Img;
 image_object.scaleToWidth(700);
 image_object.scaleToHeight(500);
 image_object.set({
    top:0,
    left:0
 });
 canvas.add(image_object);   
});	
	
}

function playSound(){
	x.play();
    another_image();
    }

    function another_image()
{
fabric.Image.fromURL('images.jpg',function(Img){
 image_object=Img;
 image_object.scaleToWidth(700);
 image_object.scaleToHeight(500);
 image_object.set({
    top:0,
    left:0
 });
 canvas.add(image_object);   
});
}	