/* _____________ 测试用例 _____________ */
import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [Expect<Alike<typeof result, Expected>>]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

/* _____________ 你的代码 _____________ */

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [key in K]: V }>
  get(): T
}
