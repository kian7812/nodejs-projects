/**
 * 该文件演示如何使用dotenv库读取环境变量配置文件
 * dotenv可以将.env文件中的环境变量加载到process.env中
 */

// 使用 dotenv
const dotenv = require('dotenv')

// 配置dotenv，指定要读取的环境变量文件路径
// 这里指定了读取.env.dev文件而不是默认的.env文件
dotenv.config(
  {
    path: '.env.dev' // 自定义环境变量文件路径
  }
)

// 读取并打印环境变量VITE_API_KEY的值
// 环境变量已被dotenv从.env.dev文件加载到process.env对象中
console.log(process.env.VITE_API_KEY)