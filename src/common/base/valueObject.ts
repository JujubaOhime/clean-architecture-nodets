/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structrual property.
 */

export abstract class ValueObject<ValueType> {
  public readonly props: ValueType

  constructor (props: ValueType) {
    this.props = Object.freeze(props)
  }

  public equals (vo?: ValueObject<ValueType>): boolean {
    if (vo === null || vo === undefined) {
      return false
    }
    if (vo.props === undefined) {
      return false
    }

    return JSON.stringify(this.props) === JSON.stringify(vo.props)
  }
}
