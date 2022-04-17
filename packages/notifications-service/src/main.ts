/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express'
import * as mock_data from './mock_data.json'

const app = express()

app.get('/search', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const { type } = req.query
  if (!type) {
    res.json(mock_data)
  }
  res.send({ message: 'Welcome to notifications!' })
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
server.on('error', console.error)
