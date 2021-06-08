/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #困难 #utils #infer
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现高级util类型`GetRequired<T>`，该类型保留所有必填字段
  
  例如
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/57/zh-CN
*/

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>
]

/* _____________ 你的代码 _____________ */

type GetRequired<T> = 

type A = GetRequired<{ foo: number; bar?: string }>
