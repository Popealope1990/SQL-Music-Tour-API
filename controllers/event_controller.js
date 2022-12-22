//Dependencies
const events = require('express').Router()
const db = require('../models')
const {Event} = db

//Find All Events
events.get('/', async (req,res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['date', 'ASC']]
        })
        res.status(200).json(foundEvents)
    } catch(error) {
        res.status(500).json(error)
    }
})

//Creat An Event
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'A New Event Has Been Added',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update An Event
events.put('/:id', async (req, res) => {
    try {
        const updateEvent = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updateEvent} Successfully`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Delete An Event
events.delete('/:id', async (req, res) => {
    try {
        const deleteEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully Deleted ${deleteEvent} Event`
        })
    }  catch(err) {
        res.status(500).json(err)
    }
})

//Find A Specific Event
events.get('/:id', async (req, res) => {
    try{
    const foundEvent = await Event.findOne({
        where: { event_id: req.params.id}
    })
    res.status(200).json(foundEvent)
} catch(err) {
    res.status(500).json(err)
}
})


//Export
module.exports = events