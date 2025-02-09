import UsersControllers from '../controllers/UsersControllers.js'
import Routes from './Routes.js'
export default class UserRoutes extends Routes {
  constructor() {
    super()
    this.controller = new UsersControllers()
    this.getRoutes()
  }

  getRoutes() {
    this.router
      .get('/', this.controller.getAllUsers)
      .get('/user', this.controller.getUserByName)
      .get('/nombre', this.controller.getUserByNombre)
      //.get('/:id', this.controller.getUserByID)
      .post('/edi', this.controller.updateUser)
      .put('/', this.controller.updateUser)
      .get('/edu', this.controller.deleteUser)
      .delete('/edu', this.controller.deleteUser)
      .post('/', this.controller.createUser)
  }
}