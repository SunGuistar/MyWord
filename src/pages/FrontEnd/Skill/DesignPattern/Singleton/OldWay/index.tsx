/**
 * 单例模式
 * render三次，只渲染一个
 */

export default  () => {
  // 创建元素
  function createDialog(html: string) {
    const div = document.createElement('div')
    div.innerHTML = html
    document.body.appendChild(div)

    return div
  }

  // 创建单例
  function getSingle(fn: any) {
    let instance: any

    // instance 存在时直接返回 不存在时赋值为fn的返回
    return function (this: any) {
      if (!instance) {
        instance = fn.apply(this, arguments)
      }
      return instance
    }
  }

  const bindEvent = getSingle(() => createDialog('dialog'))

  const render = function () {
    console.log('开始渲染')
    bindEvent()
  }

  render()

  render()

  render()
}
