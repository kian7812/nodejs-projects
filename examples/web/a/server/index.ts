// 需求：依据请求接口内容返回相应的数据
import express from 'express'
import { DataStore } from './data';

const app = express()

// 路由操作

app.get('/', (req, res) => {
  // res.end('1122')
  res.json(DataStore.list)
})

app.listen(8080, () => {
  console.log('服务已经开启了')
})