import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    requiredFields.forEach(field => {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    })

    return {
      body: {},
      statusCode: 200
    }
  }
}
