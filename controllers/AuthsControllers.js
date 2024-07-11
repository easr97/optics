import AuthDaosMySQL from '../db/daos/authDaosMySQL.js'
import usHelpers from '../helpers/helperUsers.js'
import csHelpers from '../helpers/helperClients.js'
import jwt from 'jsonwebtoken'
import swal from 'sweetalert'
import bcrypt from 'bcryptjs'
import authConfig from '../config/authsConfig.js'
import { json } from 'express'
export default class AuthsControllers {
  constructor() {
    this.db = new AuthDaosMySQL()
    this.uhelpers = new usHelpers()
    this.chelpers = new csHelpers()
  }

  ulogin = async (req, res) => {
    try {
      const {usuario, password} = req.body
      const userArray = await this.db.ulogin(usuario);
      const user = userArray[0];
      if (!user) {
        return res
          .status(404)
          .json({ error: true, desc: "Usuario no existe" })
      }
      const isValid = bcrypt.compareSync(password, user.u_password)
      if (!isValid) {
        return res
          .status(404)
          .json({ error: true, desc: "Contraseña inválida" })
      }

      const result = true
      const payload = { usuario }
      const signature = process.env.SECRET_KEY
      const token = jwt.sign(payload, signature, authConfig.token)
      result & res
        .status(201)
        .cookie('token', token, authConfig.cookie)
        .redirect('https://grupo14-24134.alwaysdata.net/central_panel.html')
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller uloin", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  clogin = async (req, res) => {
    try {
      const { correo, password } = req.body
      const clientArray = await this.db.clogin(correo);
      const client = clientArray[0];
      //const client = await this.db.getClientByName(correo)
      if (!client) {
        return res
          .status(404)
          .json({ error: true, desc: "Cliente no existe" })
      }
      const isValid = bcrypt.compareSync(password, client.cl_contrasena)
      if (!isValid) {
        return res
          .status(404)
          .json({ error: true, desc: "Contraseña inválida" })
      }

      const result = true
      const payload = { correo }
      const signature = process.env.SECRET_KEY
      const token = jwt.sign(payload, signature, authConfig.token)
      result & res
        .status(201)
        .cookie('token', token, authConfig.cookie)
        .redirect('/')
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller clogin", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }

  cregister = async (req, res) => {
    console.log(req.body)
    const cliente = this.chelpers.parseClient(req.body)
    try {
      const result = await this.db.cregister(cliente)
      //swal('Info', result, 'Success')
      const { correo } = cliente
      const payload = { correo }
      const signature = process.env.SECRET_KEY
      const token = jwt.sign(payload, signature, authConfig.token)
      result & res
        .status(201)
        .cookie('token', token, authConfig.cookie)
        .redirect('/')
    } catch (err) {
      // ...la ejecución salta aquí
      console.log("En controller ", err.name);
      console.log("En controller cregister", err.message);
      res.json("Nuestras disculpas, los datos tienen errores, revise, e intentaremos solicitarlos una vez más.")
    }
  }
}