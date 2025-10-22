
import { connection } from "../infra/connection";


//Tipos
//definição de modelo (entidade) User
export type     Usuario = {
  id_usuario?: number,
  nome: string;
  email: string;
  senha: string;
  data_criacao?: Date;

}

//função de inserir
export async function insert(user: Usuario) {
    await connection.query('INSERT INTO usuario(nome, email, senha, ) VALUES ($1, $2, $3);',
      [
        user.nome,
        user.email,
        user.senha,       
      ]
    );
  }
 // atualizar pelo id
  export async function update(user: Usuario) {
    await connection.query('UPDATE users SET nome=$1, email=$2, senhad$3, WHERE id_usuario=$4 ',
      [
        user.nome,
        user.email,
        user.senha,
        user.id_usuario
      ]
    );
  }
  
// deletar pelo id
    export async function deleteById(id: string) {
        await connection.query('DELETE FROM users WHERE id_usuario=$1', 
          [id]);
      }

      //função busca um Usuario no banco pelo ID.
export async function getById(id: string) {
    const { rows } = await connection.query('SELECT * FROM users where id_usuario = $1',
       [id]);
    return rows[0];
  }

// busca o usuario pelo email
  export async function getByEmail(email: string) {
    const { rows } = await connection.query('SELECT * FROM users where email = $1', 
      [email]);
    return rows[0];
  }