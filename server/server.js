const express =  require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json({"content": ["TALENT PLUS",]})
})

app.get("/api", (req, res) => {
   res.json({"content": ["TALENT PLUS",]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})