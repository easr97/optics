import Catego from "../models/categsModel.js"
export default class categsHelpers {
  parseCatego(data) {
    try {
      let ID = 0
      const { uso, genero, material, montura, tipo, tratam, marca, id} = data
      if(!uso || !genero || !material || !montura || !tipo || !tratam || !marca || !id){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      const CI = parseInt(id)
      if(!Number.isInteger(id)){
        throw new SyntaxError("El campo id, no es un número");
      }
      const regex = /[^A-Za-z0-9]/;
      if (regex.test(genero)){
        throw new SyntaxError("El campo genero, contiene caracteres especiales");
      }
      if (regex.test(material)){
        throw new SyntaxError("El campo material, contiene caracteres especiales");
      }
      if (regex.test(montura)){
        throw new SyntaxError("El campo montura, contiene caracteres especiales");
      }
      if (regex.test(tipo)){
        throw new SyntaxError("El campo tipo, contiene caracteres especiales");
      }
      if (regex.test(tratam)){
        throw new SyntaxError("El campo tratam, contiene caracteres especiales");
      }
      if (regex.test(marca)){
        throw new SyntaxError("El campo marca, contiene caracteres especiales");
      }
      const MA = marca.toUpperCase()
      if (id) {
        ID = parseInt(id)
      }
      const categ = new Catego(uso, genero, material, montura, tipo, tratam, MA, ID)
      return categ
          } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}