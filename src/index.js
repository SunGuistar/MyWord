/**
 * 全局设置
 * 1. 用.js是因为.tsx会对返回值进行类型检查。目前用.js文件，之后看是否有改进空间。
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
/**
 * 时间库dayjs
 */
import * as dayjs from 'dayjs'
// 使用本地化语言
import 'dayjs/locale/zh-cn'
// 设置中文日期
dayjs.locale('zh-cn')
/**
 * 时间库moment
 */
import * as moment from 'moment'
//使用本地化语言
import 'moment/locale/zh-cn'
// 设置中文日期
moment.locale('zh-cn')
/**
 * 热更新
 */
if (module && module.hot) {
  module.hot.accept()
}
/**
 * 1.创建dva实例
 */
import dva from 'dva'
import { createBrowserHistory as createHistory } from 'history'
const app = dva({
  history: createHistory(),
  onError() {
    // window.kraken.dispatchEvent('kraken:error')
  }
})
/**
 * 2. 装载插件
 */
import createLoading from 'dva-loading'
//immer用于immutable（不可变数据）
import createImmer from 'dva-immer'
app.use(createLoading())
app.use(createImmer())
/**
 * 3. 路由配置
 */

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
