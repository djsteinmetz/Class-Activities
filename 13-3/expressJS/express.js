const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>THIS IS MY EXAMPLE APPLICATION THAT LISTENS ON PORT 3000</h1>'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))