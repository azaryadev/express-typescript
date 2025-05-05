// Import Express and its type definitions
import express, {
  // type NextFunction,
  type Request,
  type Response,
  type Application
} from 'express'
// Load environment variables from .env file
import 'dotenv/config'

// Create Express application instance
const app: Application = express()
// Get port from environment variable or use default 3000
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

// Define route handler for the root path
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
