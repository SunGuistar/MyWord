/**
 * 单例模式
 * ES6实现
 */

export default () => {
  class Singleton {
    static instance: any
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this
      }
      return Singleton.instance
    }
  }

  const single = new Singleton()
  const single2 = new Singleton()

  // 返回true 因为single2创建实例的时候返回的还是上一次的实例
  console.log('Same', single == single2)
}
