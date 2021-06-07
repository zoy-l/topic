/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.
  
  For example
  
  ```ts
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  ```
  
  > View on GitHub: https://tsch.js.org/106
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>
]

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${infer I}${infer L}${infer R}`
  ? I extends ' '
    ? TrimLeft<`${L}${R}`>
    : I extends '\n'
    ? TrimLeft<R>
    : S
  : never
