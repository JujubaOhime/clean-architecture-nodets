import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../errors'
import { type Controller, type EmailValidator } from '../protocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const isEmailValid = this.emailValidator.isValid(httpRequest.body.email as string)
    if (!isEmailValid) {
      return badRequest(new InvalidParamError('email'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
