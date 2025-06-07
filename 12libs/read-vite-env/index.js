// 引入path模块，用于处理和转换文件路径
const path = require('path')
// 引入fs模块，用于文件系统操作
const fs = require('fs')

// 定义一个函数，用于加载指定的环境变量文件
function loadEnvPath(fileName = '.env.dev') {
  const envPath = path.resolve(fileName) // 解析文件路径为绝对路径
  try {
    const envContent = fs.readFileSync(envPath, 'utf-8') // 读取文件内容为字符串
    envContent.split('\n').forEach(line => { // 按行分割文件内容
      if (!line.trim() || line.startsWith('#')) return // 跳过空行和注释行
      const [key, value] = line.split('=') // 按等号分割每一行，提取键和值
        .map(item => item.trim()) // 去除键和值的空格
      if (key && value && /^VITE_.*/.test(key)) { // 检查键是否以VITE_开头
        process.env[key] = value // 将键值对存入环境变量
      }
    })
    console.log(process.env.VITE_API_KEY) // 打印VITE_API_KEY环境变量的值
    console.log(process.env.BASE_URL) // 打印BASE_URL环境变量的值
  } catch (error) {
    console.error(error.message) // 如果读取文件失败，打印错误信息
  }
}

loadEnvPath() // 调用函数，加载默认的.env.dev文件