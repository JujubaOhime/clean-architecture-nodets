import { Entity } from '../../common/base/entity'
import { UserEmail } from '../value-objects/user.email.valueObject'
import { UserName } from '../value-objects/user.name.valueObject'
import { UserPassword } from '../value-objects/user.password.valueObject'

interface UserProps {
  name: UserName
  email: UserEmail
  password: UserPassword
}

interface UserEntityProps {
  name: string
  email: string
  password: string
}

export class User extends Entity<UserProps> {
  get name (): UserName {
    return this.props.name
  }

  get email (): UserEmail {
    return this.props.email
  }

  private constructor (props: UserProps, id?: string) {
    super(props, id)
  }

  public static createUser (props: UserEntityProps, id?: string): User {
    const name = UserName.create(props.name)
    const email = UserEmail.create(props.email)
    const password = UserPassword.create(props.password)

    if (!name || !email || !password) {
      throw new Error('Name, email and password are required')
    }

    return new User({ name, email, password }, id)
  }
}
