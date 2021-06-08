/*
  17 - 科里化 1
  -------
  by Anthony Fu (@antfu) #困难 #array
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  >在此挑战中建议使用TypeScript 4.0
  
  [Currying]（https://en.wikipedia.org/wiki/Currying）是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。
  
  例如：
  
  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)
  
  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```
  
  传递给`Currying`的函数可能有多个参数，您需要正确键入它。
  
  在此挑战中，curried函数一次仅接受一个参数。分配完所有参数后，它应返回其结果。
  
  > 在 Github 上查看：https://tsch.js.org/17/zh-CN
*/

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying(
  (a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true
)

type cases = [
  Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
]

/* _____________ 你的代码 _____________ */

declare function Currying<T, S>(
  fn: T
): T extends (...rest: infer R) => infer L ? (x: S) => ThisType<R[0]> : S
