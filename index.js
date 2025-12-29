import express from "express"
import fs from 'fs/promises'
const app = express()
app.get("/", async (req, res) => {
  let count = await fs.readFile("./count.txt", "utf8")
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
  await fs.writeFile("./count.txt",count.toString(),"utf8")
})
app.listen(3000, () => {
  console.log("http://localhost:3000")
})