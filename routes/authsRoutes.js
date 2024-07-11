import AuthsControllers from '../controllers/AuthsControllers.js'
import Routes from './Routes.js'
export default class AuthRoutes extends Routes {
  constructor() {
    super()
    this.controller = new AuthsControllers()
    this.getRoutes()
  }

  getRoutes() {
    this.router
    .post('/cregister', this.controller.cregister)
    .post('/clogin', this.controller.clogin)
    .post('/ulogin', this.controller.ulogin)
  }
}