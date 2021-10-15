/**
 * 发布-订阅模式
 * 定义：消息的发布者，不会将消息直接发送给特定的订阅者，而是通过消息通道广播出去，然后订阅者通过订阅获取想要的消息
 * 举例：烧水时，会在意水是否烧开（订阅），水烧开了则水壶会叫（发布）
 * 条件：1.各模块相互独立
 *       2.存在一对多的依赖关系
 *       3.依赖模块或者依赖关系不稳定
 *       4.各模块由不同的人员，团队开发
 */
import React from 'react'
import { message } from 'antd'

export default () => {
  /**
   * 简单发布订阅类
   */
  class EventEmit {
    // 消息队列
    events: { [key: string]: Array<(...args: any) => void> } = {}
    /**
     * 订阅消息
     * @param name
     * @param cb
     */
    on = (name: string, cb: (...args: any) => void) => {
      if (this.events[name]) {
        this.events[name].push(cb)
      } else {
        this.events[name] = [cb]
      }
    }
    /**
     * 发布消息
     * @param name
     * @param arg
     */
    trigger = (name: string, ...args: any) => {
      if (this.events[name]) {
        this.events[name].forEach((eventListener: (...args: any) => void) => {
          eventListener(...args)
        })
      }
    }
    /**
     * 取消订阅
     * @param name
     * @param callback
     */
    off = (name:string) => {
      if(this.events[name]) {
        delete this.events[name]
      }

    }
  }
  const event = new EventEmit()
  // 订阅
  event.on('person', (position: string, salary: number) => console.log(`你的职位:${position} 期望薪水：${salary}`))
  event.on('skill', (skill: string, hobby: string) => console.log(`你的技能:${skill} 爱好：${hobby}`))
  // 发布
  event.trigger('person', '前端', 10000)
  event.trigger('skill', '端茶和倒水', '足球')
}
