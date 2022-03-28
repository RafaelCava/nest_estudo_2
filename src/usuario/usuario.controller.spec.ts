import { Test, TestingModule } from '@nestjs/testing'
import { UsuarioController } from './usuario.controller'
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
    const usuario = {
      nome: 'rafael',
      email: 'teste@teste.com'
    }

    expect(controller.cria(usuario)).toBe(usuario)
  })
})
