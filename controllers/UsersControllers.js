import UserDaosMySQL from '../db/daos/userDaosMySQL.js'
import usersHelpers from '../helpers/helperUsers.js'
export default class UsersControllers {
  constructor() {
    this.db = new UserDaosMySQL()
    this.helpers = new usersHelpers()
  }

  getAllUsers = async (req, res) => {
    try {
      const users = await this.db.getAllUsers()
      res.json(users)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getUserByName = async (req, res) => {
    const { usuario } = req.query
    try {
      const result = await this.db.getUserByName(usuario)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getUserByNombre = async (req, res) => {
    const { nombre } = req.query
    try {
      const result = await this.db.getUserByName(nombre)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getUserByID = async (req, res) => {
    const { id } = req.params
    try {
      const user = await this.db.getUserByID(id)
      res.json(user)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  createUser = async (req, res) => {
    const user = this.helpers.parseUser(req.body)
    try {
      const result = await this.db.createUser(user)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  updateUser = async (req, res) => {
    const data = this.helpers.parseUser(req.body)
    try {
      const result = await this.db.updateUser(data)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  deleteUser = async (req, res) => {
    const { usuario } = req.query
    try {
      const result = await this.db.deleteUser(usuario)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }
}
