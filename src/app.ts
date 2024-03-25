import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT: number = 3000

require("./model/index")

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log("Server has started at port", PORT)
})