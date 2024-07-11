import ProductDaosMySQL from '../db/daos/productDaosMySQL.js'
import productsHelpers from '../helpers/helperProducts.js'
export default class ProductsControllers {
  constructor() {
    this.db = new ProductDaosMySQL()
    this.helpers = new productsHelpers()
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.db.getAllProducts()
      //res.sendFile(__dirname + '/tabla_productos.html')
      res.json(products)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getProductByName = async (req, res) => {
    const { descripcion } = req.query
    try {
      const result = await this.db.getProductByName(descripcion)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getProductByID = async (req, res) => {
    const { referencia } = req.query
    try {
      const product = await this.db.getProductByID(referencia)
      res.json(product)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }


  createProduct = async (req, res) => {
    const product = this.helpers.parseProduct(req.body)
    try {
      const result = await this.db.createProduct(product)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  updateProduct = async (req, res) => {
    const data = this.helpers.parseProduct(req.body)
    try {
      const result = await this.db.updateProduct(data)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  deleteProduct = async (req, res) => {
    console.log('req.query:', req.query)
    const { referencia } = req.query
    console.log("Controller borrando: ", referencia)
    try {
      const result = await this.db.deleteProduct(referencia)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }

  }
}
