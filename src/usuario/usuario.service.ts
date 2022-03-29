import { Injectable } from '@nestjs/common'
import { Usuario } from './usuario.entity'

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [
    {
      id: 1,
      nomeDeUsuario: 'teste',
      senha: 'teste123',
      dataDeEntrada: new Date(),
      email: 'teste@teste.teste',
      nomeCompleto: 'Rafael Cavalcante'
    }
  ]

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario)

    return usuario
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(
      usuario => usuario.nomeDeUsuario === nomeDeUsuario
    )
  }
}
