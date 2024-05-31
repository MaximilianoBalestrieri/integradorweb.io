//SCRIPT para el carrusel
let index = 0;
let contenedor=document.getElementById("contenedor");
let galeria=document.querySelectorAll(".galeria img");
mostrarFoto();


function selecFoto(i){
    index=i;
    mostrarFoto();
}

function aIzq(){
    if(index>0){
        index--;
    }else{
        index=galeria.length-1;
    }
    mostrarFoto();
}

function aDer(){
    if(index<galeria.length-1){
        index++;
    }else{
        index=0;
    }
    mostrarFoto();
}

function mostrarFoto(){
    for (let i = 0; i < galeria.length; i++){
        galeria[i].classList.remove("seleccionada");
    }
    

    let foto = galeria[index].cloneNode(true);
    contenedor.removeChild(contenedor.children[0]);
    contenedor.appendChild(foto);  

    galeria[index].classList.add("seleccionada");
}