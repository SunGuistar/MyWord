/**
 * 装饰器模式
 */
import React from 'react'
export default () => {
  /**
   * 带有黄色背景的高阶组件
   * @param WrapperComponent 被装饰的组件
   * @returns
   */
  const yellowHOC = (WrapperComponent: any) => {
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        <WrapperComponent />
      </div>
    )
  }

  /**
   * 被装饰组件
   * @returns
   */
  const TargetComponent = () => <div>Decorator</div>
  return yellowHOC(TargetComponent)
}
