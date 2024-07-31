import { Router } from "express"
import { atualizar, cadastrar, deletar, detalharInstrutores, listarInstrutores } from "./controladores/instrutores"

const rotas = Router()



// Rotas referente aos Instrutores (Ações)

// Lista todos os instrutores:
rotas.get('/instrutores', listarInstrutores)

// Detalha as informações de um instrutor apenas
rotas.get('/infosInstrutores/:id', detalharInstrutores)

// Cadastrar um instrutor
rotas.post('/cadastrarInstrutor', cadastrar)

// Editar um instrutor
rotas.put('/editarInstrutor/:id', atualizar)

// Excluir um instrutor
rotas.delete('/excluirInstrutor/:id', deletar)


// --> Rotas referente as aulas da plataforma:

// Cadastrar uma aula para um instrutor 
rotas.post('/cadastrarAula')

// Excluir uma aula para um instrutor
rotas.delete('/excluirAula')

// Amanhã realizar a parte de aulas

export default rotas