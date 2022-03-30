import { NestResponse } from './nest-response'

export class NestResponseBuilder {
  private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {}
  }
  public comStatus(status: number): NestResponseBuilder {
    this.resposta.status = status
    return this
  }

  public comHeaders(headers: Object): NestResponseBuilder {
    this.resposta.headers = headers
    return this
  }

  public comBody(body: Object): NestResponseBuilder {
    this.resposta.body = body
    return this
  }

  public build(): NestResponse {
    return new NestResponse(this.resposta)
  }
}
