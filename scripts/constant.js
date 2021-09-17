// 存放公共变量
const path = require('path')
const isDev = process.env.NODE_ENV !== 'production'

// 项目的根目录
const PROJECT_PATH = path.resolve(__dirname, '../')
// 项目名
const PROJECT_NAME = path.parse(PROJECT_PATH).name
// 服务端信息
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT,
}
