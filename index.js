require('dotenv').config()
const express = require('express')

const app = express()


const port = 4000  // kisis port pe kar lo run

app.get('/', (req, res) => { // request and response 
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
   res.send('hiteshdotcom')
})
// iske baad phirse run karn ahoga tab  host hoga login wala

app.get('/login',(req,res)=>{
   res.send('<h1>please log in again at chai or code</h1>')
})

app.get('/youtube',(req,res)=>{
   res.send('<h1>chai or code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  // listen hoga yahann se
