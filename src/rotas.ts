import { Router } from "express"
import { listarUsuarios, rotaLogin, rotaPadrao } from "./controladores/controladores"

const rotas = Router()

rotas.get('/', rotaPadrao)


rotas.get('/login', rotaLogin)


rotas.get('/usuarios', listarUsuarios)



export default rotas