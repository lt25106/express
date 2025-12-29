import { createClient } from 'redis'
const client = createClient({
  url: process.env.REDIS_URL
})
await client.connect()
await client.set("count", 0)
console.log("Reseted.")