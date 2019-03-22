require('dotenv').config()

const express = require('express')

const projectsRoutes = require('./routes/projectsRoutes')
const actionsRoutes = require('./routes/actionsRoutes')

const app = express()

app.use(express.json())

app.use('/api/projects', projectsRoutes)
app.use('/api/actions', actionsRoutes)


const port = process.env.PORT || 4000

app.listen(port)
