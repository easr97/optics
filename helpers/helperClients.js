import Client from "../models/clientsModel.js"
export default class clientsHelpers{
  parseClient(data){
    try {
      const{correo, password, dni, nombre, apellido, telefono, direccion, fenac} = data
      if(!correo || !password || !dni || !nombre || !apellido || !telefono || !direccion || !fenac){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      const CI = parseInt(dni)
      if(!Number.isInteger(dni)){
        throw new SyntaxError("El campo dni, no es un número");
      }
      const client = new Client(correo, password, CI, nombre, apellido, telefono, direccion, fenac)
      return client
        } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}