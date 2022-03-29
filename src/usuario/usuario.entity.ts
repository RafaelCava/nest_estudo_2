import { Exclude, Expose } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator'

export class Usuario {
  @IsNumber()
  id: number

  @Expose({
    name: 'username'
  })
  @IsNomeDeUsuarioUnico({
    message: 'Nome de usuário precisa ser único'
  })
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
  @IsString({
    message: 'O campo senha deve ser uma string'
  })
  @Expose({
    name: 'password'
  })
  @Exclude({
    toPlainOnly: true
  })
  senha: string

  @Expose({
    name: 'fullname'
  })
  @IsNotEmpty({
    message: 'O nome completo é obrigatório'
  })
  @IsString({
    message: 'O nome completo deve ser uma string'
  })
  nomeCompleto: string

  @Expose({
    name: 'joinDate'
  })
  dataDeEntrada: Date
}
