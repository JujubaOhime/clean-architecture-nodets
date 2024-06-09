import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { badRequest, serverError } from '../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../errors'
import { type Controller } from '../protocols'
import { User } from '../../0.domain/entities/user.entity'

export class SignUpController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () {}
  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const user = User.createUser({
        name,
        email,
        password
      })

      console.log({ user })

      return {
        statusCode: 200,
        body: { user }
      }
    } catch {
      return serverError()
    }
  }
}
