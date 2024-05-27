let nombre = document.getElementById("nombre");
let nomError = document.getElementById("nomError");

let apellido = document.getElementById("apellido");
let apError = document.getElementById("apError");

let telefono = document.getElementById("telefono");
let telError = document.getElementById("telError");

let mail = document.getElementById("mail");
let mailError = document.getElementById("mailError");

let fecha = document.getElementById("fecha");
let fechaError = document.getElementById("fechaError");


setCalendario();
function setCalendario() {
    let f = new Date();
    f.setDate(f.getDate() + 1);
    let yy = f.getFullYear();
    let mm;
    if (f.getMonth() + 1 < 10) {
        mm = "0" + (f.getMonth() + 1);
    } else {
        mm = f.getMonth() + 1;
    }
    let dd;
    if (f.getDate() < 10) {
        dd = "0" + f.getDate();
    } else {
        dd = f.getDate();
    }
    fecha.defaultValue = yy + "-" + mm + "-" + dd;
    fecha.setAttribute("min", yy + "-" + mm + "-" + dd);
}


function validaNombre() {
    nombre.classList.remove("error", "noError");
    nomError.innerHTML = "";
    let nmbr = nombre.value.trim();
    if (nmbr.length == 0) {
        nomError.innerHTML = "Debe ingresar un nombre";
        nombre.classList.add("error");
        return false;
    } else if (nmbr.length > 20) {
        nomError.innerHTML = "Nombre muy largo";
        nombre.classList.add("error");
        return false;
    }
    nombre.classList.add("noError");
    return true;
}


function validaApellido() {
    apellido.classList.remove("error", "noError");
    apError.innerHTML = "";
    let ap = apellido.value.trim();
    if (ap.length == 0) {
        apError.innerHTML = "Debe ingresar su apellido";
        apellido.classList.add("error");
        return false;
    } else if (ap.length > 20) {
        apError.innerHTML = "Apellido muy largo";
        apellido.classList.add("error");
        return false;
    }
    apellido.classList.add("noError");
    return true;
}


function validaTelefono() {
    telefono.classList.remove("error", "noError");
    telError.innerHTML = "";
    let tel = telefono.value;
    let regex_tel = /^[1-9]\d{9}$/;
    if (tel.length == 0) {
        telError.innerHTML = "Debe ingresar su teléfono de contacto";
        telefono.classList.add("error");
        return false;
    } else if (tel.length > 0 && !regex_tel.test(tel)) {
        telError.innerHTML = "Ingrese el código de área y su número, sin 0 y sin 15.";
        telefono.classList.add("error");
        return false;
    }
    telefono.classList.add("noError");
    return true;
}


function validaMail() {
    mail.classList.remove("error", "noError");
    mailError.innerHTML = "";
    let m = mail.value;
    let regex_mail = /^(\w|.)+@\w+(\.\w{2,4})+$/;
    /*if(m.length==0){
        mailError.innerHTML="Debe ingresar su eMail de contacto";
        mail.classList.add("error");
        return false;
    }else*/
    if (m.length > 0) {
        if (!regex_mail.test(m)) {
            mailError.innerHTML = "Dirección de eMail incorrecta.";
            mail.classList.add("error");
            return false;
        } else {
            mail.classList.add("noError");
        }
    }
    return true;
}


function validaFecha() {
    fecha.classList.remove("error", "noError");
    fechaError.innerHTML = "";
    let s = new Date(fecha.value + "T00:00:00");
    let hoy = new Date();
    if (s <= hoy) {
        fechaError.innerHTML = "Fecha incorrecta.<br>Sólo puede consultar por fechas a futuro.";
        fecha.classList.add("error");
        return false;
    } else {
        fecha.classList.add("noError");
        return true;
    }
}


function validar() {
    validaNombre();
    validaApellido();
    validaTelefono();
    validaMail();
    validaFecha();

    if (validaNombre() && validaApellido() && validaTelefono() && validaMail() && validaFecha())
        return true;
    else
        return false;
}