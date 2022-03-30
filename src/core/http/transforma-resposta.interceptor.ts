import {
  CallHandler,
  ExecutionContext,
  Inject,
  NestInterceptor
} from '@nestjs/common'
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core'
import { map, Observable } from 'rxjs'
import { NestResponse } from './nest-response'

export class TransformaRespostaInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter
  constructor(
    @Inject(HttpAdapterHost)
    adapterHost: HttpAdapterHost
  ) {
    this.httpAdapter = adapterHost.httpAdapter
  }
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> {
    return next.handle().pipe(
      map((respostaDoControlador: NestResponse) => {
        if (respostaDoControlador instanceof NestResponse) {
          const ctx = context.switchToHttp()
          const res = ctx.getResponse()
          const { headers, status, body } = respostaDoControlador

          const nomesDosCabecalhos = Object.getOwnPropertyNames(headers)
          nomesDosCabecalhos.forEach(nomeDoCabecalho => {
            const valorDoCabecalho = headers[nomeDoCabecalho]
            this.httpAdapter.setHeader(res, nomeDoCabecalho, valorDoCabecalho)
          })

          this.httpAdapter.status(res, status)
          return body
        }
        return respostaDoControlador
      })
    )
  }
}
