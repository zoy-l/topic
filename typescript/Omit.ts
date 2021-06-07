import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ 答案 _____________ */

type Exclude1<T, K> = T extends K ? never : T

type MyOmit<T, K> = { [key in Exclude1<keyof T, K>]: T[key] }
