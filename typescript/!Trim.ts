/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
]

/* _____________ Your Code Here _____________ */

// your answers
type Whitespace = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${Whitespace}${infer R}`
  ? Trim<R>
  : S extends `${infer R}${Whitespace}`
  ? Trim<R>
  : S

type A = Uppercase<'h'>
