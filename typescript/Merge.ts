/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: string
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: string
      }
    >
  >
]

/* _____________ Your Code Here _____________ */

type Merge<F extends object, S extends object> = {
  [key in keyof (F & S)]: key extends keyof S ? S[key] : (F & S)[key]
}

type A = Merge<Foo, Bar>
