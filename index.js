const express = require("express")
const helmet = require("helmet")
const projectsRouter = require("./projects/project-router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use(projectsRouter)

server.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`)
})