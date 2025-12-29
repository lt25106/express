import express from "express"
import { createClient } from 'redis'
const app = express()
const client = createClient({
  url: process.env.REDIS_URL
})
await client.connect()
let count = await client.get("count")
app.get("/", async (req, res) => {
  count++;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${count}</title>
    </head>
    <body>
      <h1>${count}</h1>
    </body>
    </html>  
  `)
  await client.set("count",count)
})
app.listen(3000, () => {
  console.log("http://localhost:3000")
})