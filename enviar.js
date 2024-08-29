
const nombre = $("nombre");
const apellido = $("apellido");
const email = $ ("email");
const contraseña = $("contraseña");
const confirmarContraseña = $("confirmarContraseña");
const enviar = $("enviar");
let listaUsuarios = []

enviar.onclick=()=>{
    alert(`formulario completo, ${nombre.value}`)
    const usuario = {
        nombre : nombre.value,
        apellido: apellido.value,
        email:email.value,
        contraseña: contraseña.value
    }
    listaUsuarios.push(usuario)
    console.log(listaUsuarios);
}


function $(elemento) {
    return document.getElementById(elemento);
}