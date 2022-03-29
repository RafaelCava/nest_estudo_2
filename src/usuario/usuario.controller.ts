import { Body, Controller, Inject, Post } from '@nestjs/common'
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service'

@Controller('users')
export class UsuarioController {
  constructor(
    @Inject(UsuarioService)
    private readonly usuarioService: UsuarioService
  ) {}

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario)
    return usuarioCriado
  }
}
