import ProductsControllers from '../controllers/ProductsControllers.js'
import Routes from './Routes.js'
export default class ProductRoutes extends Routes {
  constructor() {
    super()
    this.controller = new ProductsControllers()
    this.getRoutes()
  }

  getRoutes() {
    this.router
      .get('/', this.controller.getAllProducts)
      .get('/pbn', this.controller.getProductByName)
      .get('/pbi', this.controller.getProductByID)
      .post('/edi', this.controller.updateProduct)
      .put('/', this.controller.updateProduct)
      .get('/pbr', this.controller.deleteProduct)
      .delete('/pbr', this.controller.deleteProduct)
      .post('/', this.controller.createProduct)
  }
}