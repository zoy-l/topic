/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]

/* _____________ Your Code Here _____________ */

type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer I}${infer R}` ? LengthOfString<R, [...T, I]> : T['length']

type A = LengthOfString<''>
