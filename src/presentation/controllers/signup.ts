import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    requiredFields.forEach(field => {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    })
  }
}
