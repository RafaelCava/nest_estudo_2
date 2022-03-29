import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class Usuario {
  @IsNumber()
  id: number

  @IsNotEmpty({
    message: 'O nome de usuário não pode ser vazio'
  })
  @IsString({
    message: 'O nome de usuário deve ser uma string'
  })
  nomeDeUsuario: string

  @IsNotEmpty({
    message: 'O email não pode ser vazio'
  })
  @IsEmail()
  email: string

  @IsNotEmpty({
    message: 'O campo senha é obrigatório'
  })
  @IsString()
  senha: string

  @IsNotEmpty({
    message: 'O nome completo é obrigatório'
  })
  @IsString()
  nomeCompleto: string
  dataDeEntrada: Date
}
