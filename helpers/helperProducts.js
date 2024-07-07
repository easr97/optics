import Producto from "../models/productsModel.js"
export default class productsHelpers{
  parseProduct(data){
    try {
      const{referencia, descripcion, categoria, imagen, stock, smin, costo, precio, estado} = data
      if(!referencia || !descripcion || !categoria || !imagen || !stock || !smin || !costo || !precio || !estado){
        throw new SyntaxError("datos incompletos, falta un campo");
      }
      const CI = parseInt(categoria)
      if(!Number.isInteger(CI)){
        throw new SyntaxError("El campo categoria, no es un número");
      }
      const ST = parseInt(stock)
      if(!Number.isInteger(ST)){
        throw new SyntaxError("El campo stock, no es un número");
      }
      const SM = parseInt(smin)
      if(!Number.isInteger(SM)){
        throw new SyntaxError("El campo smin, no es un número");
      }
      const CS = parseFloat(costo)
      if(!Number.isFinite(CS)){
        throw new SyntaxError("El campo costo, no es un número");
      }
      const PV = parseFloat(precio)
      if(!Number.isFinite(PV)){
        throw new SyntaxError("El campo precio, no es un número");
      }
      const ES = parseInt(estado)
      if(!Number.isInteger(ES)){
        throw new SyntaxError("El campo estado, no es un número");
      }
      const product = new Producto(referencia, descripcion, CI, imagen, ST, SM, CS, PV, ES)
      return product
      } catch (err) {
      // ...la ejecución salta aquí
      console.log("Cotejando datos");
      console.log(err.name);
      console.log(err.message);
    }
  }
}