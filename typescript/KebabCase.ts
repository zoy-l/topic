/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `FooBarBaz` -> `for-bar-baz`
  
  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
]

/* _____________ Your Code Here _____________ */

// type KebabCase<S, N extends string = ''> = S extends '😎'
//   ? S
//   : S extends `${infer I}${infer R}`
//   ? [I] extends [Uppercase<I>]
//     ? KebabCase<
//         R,
//         `${N}${N extends '' ? '' : I extends '_' | '-' ? '' : '-'}${Lowercase<I>}`
//       >
//     : KebabCase<R, `${N}${Lowercase<I>}`>
//   : N

type KebabCase<S extends string> = S extends `${infer a}${infer b}`
  ? b extends Uncapitalize<b>
    ? `${Uncapitalize<a>}${KebabCase<b>}`
    : `${Uncapitalize<a>}-${KebabCase<`${Uncapitalize<b>}`>}`
  : S

type A = KebabCase<'Foo-Bar'>
