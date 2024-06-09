import { ValueObject } from '../../common/base/valueObject'

export class UserEmail extends ValueObject<string> {
  private static isEmailValid (input: string): boolean {
    return input.length >= 8 && input.length <= 64
  }

  public static create (input: string): UserEmail | null {
    if (this.isEmailValid(input)) {
      return new UserEmail(input)
    }

    return null
  }
}
