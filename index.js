const express = require('express')
const app = express()
const port = 3000


app.get('/user/:id', (req, res) => {
  // const q = req.params
  // console.log(q.id)
  const q = req.query
  console.log(q.name)

  res.json({'name' : q.name})
})


app.listen(port, () => {
  console.log(`Example app listenig on port ${port}`)
})