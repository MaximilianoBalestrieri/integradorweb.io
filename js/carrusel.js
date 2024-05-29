//SCRIPT para el carrusel
movCarrusel();

function movCarrusel() {
    let contenedor = document.getElementById("contenedor");

    //Inicialmente está dos fotos a la izq OFFSETT=-100%
    // 1 - 2 - 3 - 4
    //       |   |

    //FAST!! Mueve a la derecha, lleva el OFFSET+60% = -40%
    //     1 - 2 - 3 - 4
    //       |   |
    let offset = -41.5;
    contenedor.style.transition = "transform 0s ease-in-out";
    contenedor.style.transform = `translateX(${offset}%)`;

    //FAST!! Rota las imagenes
    //     2 - 3 - 4 - 1
    //       |   |
    let aux = document.createElement("img");
    aux = contenedor.children[0];
    contenedor.removeChild(contenedor.children[0]);
    contenedor.appendChild(aux);

    //SLOW!! Mueve a la izquierda, lleval el OFFSET-60% = -100%
    // 2 - 3 - 4 - 1
    //       |   |
    setTimeout(function moverIzq() {
        offset = -102.5;
        contenedor.style.transition = "transform 1s ease-in-out";
        contenedor.style.transform = `translateX(${offset}%)`;

    }, 1000);
}

setInterval(function mover() {
    movCarrusel();
}, 4000);