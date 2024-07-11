import 'dotenv/config'
import express from 'express'
import AuthRoutes from '../routes/authsRoutes.js'
import CategRoutes from '../routes/categsRoutes.js'
import ClientRoutes from '../routes/clientsRoutes.js'
import ProductRoutes from '../routes/productsRoutes.js'
import UserRoutes from '../routes/usersRoutes.js'
export default class Server {
  static app = express()

  static middleWares() {
    Server.app
      .use(express.static('public'))
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
  }

  static routes() {
    const auths = new AuthRoutes()
    const categs = new CategRoutes()
    const clients = new ClientRoutes()
    const products = new ProductRoutes()
    const users = new UserRoutes()
    Server.app.use("/auths", auths.router)
    Server.app.use("/categs", categs.router)
    Server.app.use("/clients", clients.router)
    Server.app.use("/products", products.router)
    Server.app.use("/users", users.router)
  }
  static runServer(PORT) {
    Server.app.listen(PORT, () =>
      console.log(`escuchando en http://localhost:${PORT}`)
    )
  }

  static run(PORT) {
    console.clear()
    Server.middleWares()
    Server.routes()
    Server.runServer(PORT)
  }
}