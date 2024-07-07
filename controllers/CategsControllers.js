import CategDaosMySQL from '../db/daos/categDaosMySQL.js'
import categsHelpers from '../helpers/helperCategs.js'
export default class CategsControllers {
  constructor() {
    this.db = new CategDaosMySQL()
    this.helpers = new categsHelpers()
  }

  getAllCategs = async (req, res) => {
    try {
      const categs = await this.db.getAllCategs()
      res.json(categs)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getCategByName = async (req, res) => {
    const { marca } = req.query
    try {
      const result = await this.db.getCategByName(marca)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getCategByID = async (req, res) => {
    const { id } = req.params
    try {
      const categ = await this.db.getCategByID(id)
      res.json(categ)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }


  createCateg = async (req, res) => {
    const categ = this.helpers.parseCatego(req.body)
    try {
      const result = await this.db.createCateg(categ)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  updateCateg = async (req, res) => {
    const data = this.helpers.parseCatego(req.body)
    try {
      const result = await this.db.updateCateg(data)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  deleteCateg = async (req, res) => {
    const { categoria } = req.query
    const id = parseInt(categoria)
    const result = await this.db.deleteCateg(id)
    res.json(result)
  }
}
