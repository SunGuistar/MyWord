/**
 * 策略模式
 * 定义： 要实现某一个功能，有多种方案可以选择，我们定义策略，把它们一个个封装起来，并且使它们可以互相转换
 * 条件： 1.各判断条件下的策略互相独立且可复用
 *        2.策略内部逻辑相对复杂
 *        3.策略需要灵活组合
 */
import React from 'react'

// 条件规范
type ConditionOne = 1 | 2 | 3
type ConditionTwo = 'a' | 'b' | 'c'

export default () => {
  // 2个前提条件
  const condition_1: ConditionOne = 1 // 1 2 3
  const condition_2: ConditionTwo = 'a' // a b c

  /**
   * 定义策略
   * @returns Map
   */
  const strategy = () => {
    const map = new Map([
      [
        {
          condition_1: 1,
          condition_2: 'a',
        },
        () => <>策略1</>
      ],
      [
        {
          condition_1: 2,
          condition_2: 'b',
        },
        () => <>策略2</>
      ],
      [
        {
          condition_1: 3,
          condition_2: 'c',
        },
        () => <>策略3</>
      ],
    ])

    return map
  }

  /**
   * 选择策略
   * @param condition_1
   * @param condition_2
   */
  const run = (condition_1: ConditionOne, condition_2: ConditionTwo) => {
    // 筛选
    const action = [...strategy()].filter(
      ([key, value]) => key.condition_1 == condition_1 && key.condition_2 == condition_2,
    )
    // 前提是只选择第一个匹配的
    const result = action?.[0]?.[1]?.()
    return result
  }

  return run(condition_1, condition_2)
}
