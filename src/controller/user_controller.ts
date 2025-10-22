// arquivo de controle 
// 1. receber requisições HTTP
// 2. validar dados
// 3. validar regras de negócios 
// 4. comunicar com a camada MODEL 

import { Request, Response } from "express";
import { getByEmail, insert,  Usuario } from "../Model/user";

// Parte  1 -> funções que carregam páginas

// função que carregar a página login
export function show_login(req: Request, res: Response) {
  res.render('login', {
    message: null
  });
}
// função que carrega a página de listagem de usuários
export function show_list(req: Request, res: Response) {
  res.render('listar_usuario');
}


//parte 2 -> funções do CRUD
export async function register(req: Request, res: Response) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.render('login', {
      message: {
        type: 'error',
        value: 'Preencha corretamente os dados!',
        title: 'dados invalidos'
      }
    });
  }

 
  const userFounded = await getByEmail(email);

  if (userFounded) {
      return res.render('login', {
      message: {
        type: 'error',
        value: 'E-mail já existe!',
        title: 'dados invalidos'
      }
    });
  }
   
  const user: Usuario={
    nome,
    email,
    senha
   
  };

  await insert(user)
  


  res.render('login', {
      message: {
        type: 'sucess',
        value: 'Usuário cadastrado com sucesso!',
        title: 'Sucesso'
      }
    });
}