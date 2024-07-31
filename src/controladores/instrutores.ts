import { Request, Response } from "express"

type TInstrutores = {
    id: number,
    nome: string,
    email: string
}

let proximoid = 3

export const instrutores: TInstrutores[] = [

    {
        id: 1,
        nome: 'Ana', 
        email:'Ana@gmail.com'
    },

    {
        id: 2,
        nome: 'Marcelo', 
        email:'Ana@gmail.com'
    },
]

export const listarInstrutores = (req: Request, res: Response) => {
    return res.status(200).json(instrutores)
}


export const detalharInstrutores = (req: Request, res: Response) => {
    const { id } = req.params

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        })
    }

    return res.status(200).json(instrutor)
}



export const cadastrar = (req: Request, res: Response) => {
    const { nome, email } = req.body

    const novoInstrutor = {
        id: proximoid++,
        nome,
        email 
    }

    instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)

}

export const atualizar = (req: Request, res: Response) => {
    const { id } = req.params
    const { nome, email } = req.body

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        })
    }

    instrutor.nome = nome
    instrutor.email = email

    return res.status(204).send()

}


export const deletar = (req: Request, res: Response) => {
    const { id } = req.params

    const instrutorIndice = instrutores.findIndex((item) => {
        return item.id === Number(id)
    })

    if (instrutorIndice === -1) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        })
    }

    instrutores.splice(instrutorIndice, 1)

    return res.status(204).send()

}