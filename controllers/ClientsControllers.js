import ClientDaosMySQL from '../db/daos/clientDaosMySQL.js'
import clientsHelpers from '../helpers/helperClients.js'
export default class ClientsControllers {
  constructor() {
    this.db = new ClientDaosMySQL()
    this.helpers = new clientsHelpers()
  }

  getAllClients = async (req, res) => {
    try {
      const clients = await this.db.getAllClients()
      res.json(clients)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getClientByName = async (req, res) => {
    const { correo } = req.query
    try {
      const result = await this.db.getClientByName(correo)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  getClientByID = async (req, res) => {
    const { dni } = req.params
    try {
      const client = await this.db.getClientByID(dni)
      res.json(client)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }


  createClient = async (req, res) => {
    const cliente = this.helpers.parseClient(req.body)
    try {
      const result = await this.db.createClient(cliente)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  updateClient = async (req, res) => {
    const data = this.helpers.parseClient(req.body)
    try {
      const result = await this.db.updateClient(data)
      res.json(result)
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller ", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  deleteClient = async (req, res) => {
    const { dni } = req.query
    const result = await this.db.deleteClient(dni)
    res.json(result)
  }
}
