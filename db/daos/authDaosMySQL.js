import MySql from "./../connections/MySQL.js";

export default class AuthDaosMySQL extends MySql {
  constructor() {
    super()
    this.utable = "usuarios"
    this.ctable = "clientes"
  }

  async clogin(correo) {
      const query = `select * from ${this.ctable} where cl_correo = "${correo}"`
      const [result] = await this.connection.promise().query(query)
      return result
  }

  async ulogin(usuario) {
    const query = `SELECT * FROM ${this.utable} where u_usuario = "${usuario}"`
    const [result] = await this.connection.promise().query(query)
    return result
  }

  async cregister(cliente) {
    const query = `insert into ${this.ctable} (cl_correo, cl_contrasena, cl_dni, cl_nombres, cl_apellidos, cl_telefono, cl_direccion, cl_fecha_nac)
    values
    ("${cliente.correo}", "${cliente.password}", ${cliente.dni}, "${cliente.nombre}", "${cliente.apellido}", "${cliente.telefono}", "${cliente.direccion}", "${cliente.fenac}")`
    const [result] = await this.connection.promise().query(query)
    if (result.affectedRows = 1)
      return "Ok, confirmación: " + result.insertId
    else
      return "Error insertando"
  }

}