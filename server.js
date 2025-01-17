// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize} = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Pope Tour API'
    })
})

// Controllers
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/event_controller')
app.use('/events', eventsController)

const stageController = require('./controllers/stage_controller')
app.use('/stages', stageController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})