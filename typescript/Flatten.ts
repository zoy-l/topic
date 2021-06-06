/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>
  >
]

/* _____________ 你的代码 _____________ */

type Flatten<T extends any[], S extends any[] = []> = T extends [
  index: infer I,
  ...rest: infer R
]
  ? I extends any[]
    ? Flatten<[...I, ...R], S>
    : Flatten<R, [...S, I]>
  : S

type A = Flatten<[1, 2, [3, 4], [[[5]]]]>
