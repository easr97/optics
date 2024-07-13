import Client from "../models/clientsModel.js"
import bcrypt from 'bcryptjs'
export default class clientsHelpers{
  parseClient(data){
    try {
      const{correo, password, dni, nombre, apellido, telefono, direccion, fenac} = data
      if(!correo || !password || !dni || !nombre || !apellido || !telefono || !direccion || !fenac){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      const regex = /[^A-Za-z0-9.-_]/;
      if (regex.test(password)){
        throw new SyntaxError("El campo password, contiene caracteres especiales");
      }
      const hash = bcrypt.hashSync(password)
      const CI = parseInt(dni)
      if(!Number.isInteger(CI)){
        throw new SyntaxError("El campo dni, no es un número");
      }
      const client = new Client(correo, hash, CI, nombre, apellido, telefono, direccion, fenac)
      console.log('Client:', client)
      
      return client
        } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}