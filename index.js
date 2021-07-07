var i=0;
var images=[];
var time = 2000;

images[0]='foto1.jpg';
images[1]='foto2.jpg';
images[2]='foto3.jpg';

function sliderShow(){
    document.slide.src = images[i];

    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("sliderShow()",time);
}

window.onload=sliderShow;
