const search = document.getElementById('search')
const searchHandleKeyDown =(e)=>{
    console.log(e.target.value.trim().toLowerCase())
        
}
search.addEventListener('keyup',searchHandleKeyDown)

const boton = document.getElementById('searchnavbar')
const botonHandleClick =(f)=>{
    f.preventDefault()
    console.log('suerte')
    console.log(f.target.value.trim().toLowerCase())
}

boton.addEventListener('click', botonHandleClick)


