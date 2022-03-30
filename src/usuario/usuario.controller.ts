import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Post
} from '@nestjs/common'
import { NestResponseBuilder } from '../core/http/nest-response-builder'
import { NestResponse } from '../core/http/nest-response'
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
    if (!usuarioEncontrado) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuario não encontrado'
      })
    }
    return usuarioEncontrado
  }

  @Post()
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario)
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({ Location: `/users/${usuarioCriado.nomeDeUsuario}` })
      .comBody(usuarioCriado)
      .build()
  }
}
