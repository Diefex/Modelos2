
function extraer(){
    console.log("getting data");
    window.localStorage.setItem('nombres', document.getElementById("Nombres").value);
    window.localStorage.setItem('apellidos', document.getElementById("Apellidos").value);
    window.localStorage.setItem('descripcion', document.getElementById("Descripcion").value);
    window.localStorage.setItem('cedula', document.getElementById("Cedula").value);
    window.localStorage.setItem('telefono', document.getElementById("Telefono").value);
    window.localStorage.setItem('Correo', document.getElementById("email").value);
    window.localStorage.setItem('direccion', document.getElementById("direccion").value);
    window.localStorage.setItem('edad', 2020-document.getElementById("fnacA").value);
    window.localStorage.setItem('institucion', document.getElementById("institucion").value);
    window.localStorage.setItem('secD', document.getElementById("secD").value);
    window.localStorage.setItem('secH', document.getElementById("secH").value);
    window.localStorage.setItem('universidad', document.getElementById("universidad").value);
    window.localStorage.setItem('uniD', document.getElementById("uniD").value);
    window.localStorage.setItem('uniH', document.getElementById("uniH").value);
    window.localStorage.setItem('empresa', document.getElementById("empresa").value);
    window.localStorage.setItem('cargo', document.getElementById("cargo").value);
    window.localStorage.setItem('carD', document.getElementById("carD").value);
    window.localStorage.setItem('carH', document.getElementById("carH").value);
    location.href='hoja.html';
}

function mostrar(){
    console.log("showing data");
    d = window.localStorage.getItem("nombres");
    console.log(d);
}

function setDescripcion(){
    document.getElementById("Descripcion").innerHTML = window.localStorage.getItem("Descripcion");
}