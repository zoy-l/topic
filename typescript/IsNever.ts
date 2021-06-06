/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
]

/* _____________ Your Code Here _____________ */

type IsNever<T> = T | true extends true ? true : false

type IsNever1<T> = [T] extends [never] ? true : false

type A = Expect<Equal<IsNever1<never>, true>>

type B = Expect<Equal<IsNever1<{}>, false>>
