import { Test, TestingModule } from '@nestjs/testing'
import { UsuarioController } from './usuario.controller'
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service'

describe('UsuarioController', () => {
  let controller: UsuarioController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService]
    }).compile()

    controller = module.get<UsuarioController>(UsuarioController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should be return one user', () => {
    const usuario: Usuario = {
      dataDeEntrada: new Date(),
      email: 'teste@teste.teste',
      nomeDeUsuario: 'teste',
      senha: 'teste',
      nomeCompleto: 'teste',
      id: 3
    }

    expect(controller.cria(usuario)).toBe(usuario)
  })
})
