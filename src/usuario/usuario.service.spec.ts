import { Test, TestingModule } from '@nestjs/testing'
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service'

describe('UsuarioService', () => {
  let service: UsuarioService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService]
    }).compile()

    service = module.get<UsuarioService>(UsuarioService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should be return one user', () => {
    const usuario: Usuario = {
      email: 'teste@teste.com',
      dataDeEntrada: new Date(),
      id: 3,
      nomeCompleto: 'teste',
      nomeDeUsuario: 'teste',
      senha: 'teste'
    }

    expect(service.cria(usuario)).toBe(usuario)
  })
})
