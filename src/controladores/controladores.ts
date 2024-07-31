import { Request, Response } from "express"
import Rotas from '../rotas'

export const pessoas = [
    {nome: 'Ana', email:'Ana@gmail.com'},
    {nome: 'Maria', email: 'Maria@gmail.com'},
    {nome: 'Julia', email: 'Julia@gmail.com'},
    {nome: 'Silvia', email: 'Silvia@gmail.com'}
]


export const rotaPadrao = (req: Request, res: Response) => {
    return res.send('Você está na rota inicial!')
}

export const rotaLogin = (req: Request, res: Response) => {
    return res.send('Você está na rota de Login!')
}

export const listarUsuarios = (req: Request, res: Response) => {
    return res.send(pessoas)
}

