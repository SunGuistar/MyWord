/**
 * forwardRef_useImperativeHandle
 */
import React, { createRef, forwardRef, useImperativeHandle } from 'react'

// forwardRef简介
const forwardRef_construction = [
  '创建一个React组件，这个组件能够将其接受的 ref 属性传递给子组件',
  'Hooks使用实例的方式',
]
// forwardRef使用场景
const forwardRef_useWay = ['处理焦点，文本选择，媒体的控制', '触发必要的动画', '集成第三方DOM库']
// useImperativeHandle简介
const useImperativeHandle_construction = [
  '自定义实例值',
  '必须与forwardRef一起使用'
]

export default () => {
  // 创建父ref
  const ref: any = createRef()

  // 子组件
  const ChildButton = forwardRef((props: any, ref: any) => {
    // 自定义focus
    useImperativeHandle(ref, () => {
      focus: () => {
        console.log('focus')
      }
    })
    return <button ref={ref}>{props.children}</button>
  })

  return (
    <>
      {forwardRef_construction}
      {forwardRef_useWay}
      {useImperativeHandle_construction}
      <ChildButton ref={ref}>Click me!</ChildButton>
    </>
  )
}
