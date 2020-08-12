const express = require('express')
const app = express()
const responseTime = require('response-time')
const port = 3000

app.use(responseTime())




app.use((req, res, next) => {
  const start_time = new Date()
  // console.log(start_time)

  res.on('finish', () => {
    const finish_time = new Date()
    // console.log(finish_time)
    const total_time = finish_time - start_time
    // console.log(total_time)
    console.log('Time1:', new Date(), '|', req.method, 'from', req.originalUrl, '|', 'total time:', total_time, 'ms')
  })
  next()
})





app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})



app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')

})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')

})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')

})




app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
