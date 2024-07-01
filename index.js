const express = require('express')
const app = express()
const port = 3000


app.get('/user/:id', (req, res) => {
  const q = req.params
  console.log(q.id)

  res.json({'userid' : q.id})
})


app.listen(port, () => {
  console.log(`Example app listenig on port ${port}`)
})