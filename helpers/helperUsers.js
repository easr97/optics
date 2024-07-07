import User from "../models/usersModel.js"
export default class usersHelpers {
  parseUser(data) {
    let error = new Error("Por favor, revise sus datos");
    try {
      const { usuario, password, nombre, perfil, foto, estado } = data
      if(!usuario || !password || !nombre || !perfil || !foto || !estado){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      const estat = parseInt(estado)
      if(!Number.isInteger(estat)){
        throw new SyntaxError("El campo estado, no es un número");
      }
      const user = new User(usuario, password, nombre, perfil, foto, estat)
      return user
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando los datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}