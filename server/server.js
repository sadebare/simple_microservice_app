const express =  require('express')

const app = express()

var cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
   res.json({"content": ["TALENT PLUS",]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})
