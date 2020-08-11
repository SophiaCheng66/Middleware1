const express = require('express')
const app = express()
const port = 3000

const date = (req, res, next) => {
  new Date() - new Date()
  next()
}



app.use((req, res, next) => {
  console.log('Time1:', new Date(), '|', req.method, 'from', req.originalUrl, '|', 'total time:', new Date() - new Date(), 'ms')

  next()
})


app.get('/', date, (req, res, next) => {
  console.log('Time2:', new Date())
  res.send('列出全部 Todo')
  next()
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
