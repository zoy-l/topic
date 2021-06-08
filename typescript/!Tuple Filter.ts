/*
  399 - Tuple Filter
  -------
  by Ryo Hanafusa (@softoika) #hard #tuple #infer
  
  ### Question
  
  Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.
  
  For example,
  ```ts
  type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
  ```
  
  > View on GitHub: https://tsch.js.org/399
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<
    Equal<
      FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>,
      [1, 'a', false]
    >
  >,
  Expect<
    Equal<
      FilterOut<[number | null | undefined, never], never | null | undefined>,
      [number | null | undefined]
    >
  >
]

type FilterOut<T extends any[], F, K extends any[] = []> = T extends [infer R, ...infer args]
  ? [R] extends [F]
    ? FilterOut<args, F, [...K]>
    : FilterOut<args, F, [...K, R]>
  : K
