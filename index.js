require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

const projectsRoutes = require('./routes/projectsRoutes')
const actionsRoutes = require('./routes/actionsRoutes')

const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())
app.use('/api/projects', projectsRoutes)
app.use('/api/actions', actionsRoutes)

app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/routesDocs.md'))
})

const port = process.env.PORT || 4000

app.listen(port)
