/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

// type cases = [
//   Expect<Equal<DeepPick<Obj, ''>, unknown>>,
//   Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
//   Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
//   Expect<
//     Equal<
//       DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>,
//       { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
//     >
//   >
// ]

// /* _____________ Your Code Here _____________ */

// type DeepPick<T extends object, S extends string> = S extends '' ? unknown : T
