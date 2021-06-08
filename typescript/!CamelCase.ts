/*
  610 - CamelCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `for-bar-baz` -> `forBarBaz`
  
  > View on GitHub: https://tsch.js.org/610
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>
]

/* _____________ Your Code Here _____________ */

type CamelCase<S extends string> = S extends `${infer H}-${infer R}`
  ? R extends Capitalize<R>
    ? `${H}-${CamelCase<R>}`
    : `${H}${CamelCase<Capitalize<R>>}`
  : S

type A = CamelCase<'foo--bar----baz'>
