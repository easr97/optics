
// Validacion de Formulario de contacto mas imagen 

const formulario = document.getElementById('formulario');
const mensajeError = document.getElementById('mensajeError');
const botoncontacto = document.getElementById("botonContacto");
botoncontacto.addEventListener('click',validarContacto);

 function validarContacto() {
   let nombre = document.getElementById('nombre')
   let email = document.getElementById('email')
   let mensaje = document.getElementById('mensaje')
   const $selectionArchivos = document.querySelector("#selectionArchivos");
   $imgPreview = document.querySelector("imgPreview"); 

   const archivos = $selectionArchivos.files; 
     function validarEmail(email) {
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
   formulario.addEventListener('submit', function (event) {
   event.preventDefault();   
   var todo_correcto = true;
   // Validación de los campos
  if (nombre.value.trim().length < 1 ){
     alert('El campo nombre no puede estar vacío.\n');
     todo_correcto = false;
     nombre.focus();
   }
   else {

       if (!validarEmail(email.value)) {
          alert('El formato del email no es válido.\n');
         todo_correcto = false;
         email.focus();
       }
       else {
         if (mensaje.value.length < 1 ) {         
           alert('El campo mensaje no puede estar vacío.\n');
           todo_correcto = false;
           mensaje.focus();
          }
         else {
           console.log(archivos.value);
           if (archivos.length <1){
               alert('Debe seleccionar un archivo de imagen.\n');
               todo_correcto = false;
               archivos.focus();
             }
            else {
              $selectionArchivos.addEventListener("change",() =>
              {
            //Recuperamos el input que desencadeno la acción
              const archivos = $selectionArchivos.files;
                  if (!archivos || archivos.length) {
                  $imgPreview.src ="";
                  alert('El formato del archivo no es válido.\n');
                  todo_correcto = false;
                }
                else{
                    // Verificamos si existe una imagen seleccionada    
                    //Recuperamos el archivo subido
                    const primerArchivo = archivos[0];  
                    //Creamos un objeto de tipo objeturl
                    const  objectURL = URL.createObjectURL(primerArchivo);    
                    // Y a la fuente de la imagen le ponemos el objectURL
                    $imgPreview.src = objectURL;
                    //todo_correcto = false;
                    }             
                });
             }
           }
         }    
      }
      if(!todo_correcto){
       //alert(mensajeError);
         todo_correcto = false;    
      }
      else {   
      alert("Mensaje enviado. Le contestaremos en breve. Gracias");    
      formulario.submit();
      }        
   });
   
}
