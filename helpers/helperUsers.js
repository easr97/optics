import User from "../models/usersModel.js"
import bcrypt from 'bcryptjs'
export default class usersHelpers {
  parseUser(data) {
    let error = new Error("Por favor, revise sus datos");
    let ID = 0
    try {
      const { usuario, password, nombre, perfil, foto, estado, id } = data
      if(!usuario || !password || !nombre || !perfil || !foto || !estado || !id){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      if (id) {
        ID = parseInt(id)
      }
      if(!Number.isInteger(ID)){
        throw new SyntaxError("El campo id, no es un número");
      }
      let regem = /[^A-Za-z0-9.-_]/;
      if (regem.test(password)){
        throw new SyntaxError("El campo password, contiene caracteres especiales");
      }
      const hash = bcrypt.hashSync(password)
      const estat = parseInt(estado)
      if(!Number.isInteger(estat)){
        throw new SyntaxError("El campo estado, no es un número");
      }
      let regex = /[^A-Za-z0-9]/
      if (regex.test(usuario)){
        throw new SyntaxError("El campo usuario, contiene caracteres especiales");
      }
      const user = new User(usuario, hash, nombre, perfil, foto, estat, ID)
      return user
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando los datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}