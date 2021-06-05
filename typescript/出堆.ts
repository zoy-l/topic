/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
]

/* _____________ 你的代码 _____________ */
type A = Pop<[3, 2, 1]>

type Pop<T extends any[]> = T extends [...infer notLast, infer last] ? notLast : never

type Ex<T extends any[], L = T[0]> = T extends [index: infer I, ...rest: infer R]
  ? Ex<R, I>
  : L

type B = Pop2<[3, 2, 1]>

type C = Equal<Pop2<[3, 2, 1]>, [3, 2]>

type Pop2<T extends any[], S extends any[] = []> = T extends [
  index: infer I,
  ...rest: infer R
]
  ? I extends Ex<T>
    ? S
    : Pop2<R, [...S, I]>
  : never
