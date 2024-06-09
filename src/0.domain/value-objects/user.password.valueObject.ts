import { ValueObject } from '../../common/base/valueObject'

export class UserPassword extends ValueObject<string> {
  public static create (input: string): UserPassword | null {
    const isPasswordValid = input?.length >= 8 && input?.length <= 64

    if (isPasswordValid) {
      return new UserPassword(input)
    }

    return null
  }
}
