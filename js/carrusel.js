let fotoss =document.querySelector(".fotos");

let index=1;

let images=fotoss.querySelectorAll("img")
setInterval(function(){ 
    let porcentaje= index * -100;
    fotoss.style.transform="translatex("+ porcentaje +"%)";
    index++;
    if (index > images.length -1){
        index=0;
    }

},2000);