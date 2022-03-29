import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject
} from '@nestjs/common'
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core'

@Catch()
export class FiltroDeExcecaoHttp implements ExceptionFilter {
  private httpAdapter: AbstractHttpAdapter
  constructor(
    @Inject(HttpAdapterHost)
    adapterHost: HttpAdapterHost
  ) {
    this.httpAdapter = adapterHost.httpAdapter
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const req = ctx.getRequest()
    const res = ctx.getResponse()

    const { status, body } =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: exception.getResponse()
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timestamp: new Date().toISOString(),
              message: exception.message,
              path: req.path
            }
          }
    this.httpAdapter.reply(res, body, status)
  }
}
