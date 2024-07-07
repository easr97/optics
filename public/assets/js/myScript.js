
const formulario2 = document.getElementById('formulario2');
const botoncontacto2 = document.getElementById("botonContacto2");
botoncontacto2.addEventListener('click',validar);

function validar() {
  let nombre2 = document.getElementById('nombre2')
  let password2 = document.getElementById('password2')
// Validación de los campos
formulario2.addEventListener('submit', function (event) {
  event.preventDefault();   
  var todo_correcto = true;

if(nombre2.value.length < 2 ){
  alert('El campo nombre no puede estar vacío.\n');
  nombre2.focus();
  todo_correcto = false;
}else{
if(password2.value.length < 8 ){
       alert('Password inválido.\n');
       password2.focus()
       todo_correcto = false;
    }
    else{
      todo_correcto = true;
    }
}
      if(!todo_correcto){
       todo_correcto = false;
  }
  else {
    alert ("Usuario logueado");
    setTimeout(function() {w.close();}, 2000);
    let isBoss = confirm('Bienvenido');
     console.log(isBoss);
    URL(location.href="https://romanopablo8.github.io/Smart_Optics/productos.html");
    return todo_correcto;
  }
})
}





