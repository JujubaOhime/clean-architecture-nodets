import { ValueObject } from '../../common/base/valueObject'

export class UserName extends ValueObject<string> {
  public static create (input: string): UserName | null {
    const isEmailValid = input.length >= 3 && input.length <= 20

    if (isEmailValid) {
      return new UserName(input)
    }

    return null
  }
}
