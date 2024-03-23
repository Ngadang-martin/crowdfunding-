const express = require('express')

const app = express()

//Body parser configuration
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '250mb'}))

// Cors configuration configuration
const cors = require('cors')
app.use(cors({ origin: '*' }))
app.use('/images', express.static('./images'));
const route = require('./router').routes
app.use("/api",route)

const env = require(__dirname + '/config/env.json')
const PORT = process.env.PORT || env.port
const HOST = process.env.HOST || env.host
app.listen(PORT, HOST, async() => {
    const { sequelize } = require('./models')
    await sequelize.sync()

    console.log(`The server is up and running on port http://${HOST}:${PORT}`)
    
})

// app.listen({port:8080}, async () => {
//     console.log('Server up on http://localhost:8080')
//     await sequelize.sync()
//     console.log('Database Synced')
// })
