import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service'

@Controller('users')
export class UsuarioController {
  constructor(
    @Inject(UsuarioService)
    private readonly usuarioService: UsuarioService
  ) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(
    @Param('nomeDeUsuario') nomeDeUsuario: string
  ): Usuario {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
    return usuarioEncontrado
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario)
    return usuarioCriado
  }
}
