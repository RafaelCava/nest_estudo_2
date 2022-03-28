import { Module } from '@nestjs/common'
import { UsuarioController } from './usuario/usuario.controller'
import { UsuarioService } from './usuario/usuario.service'

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class AppModule {}
