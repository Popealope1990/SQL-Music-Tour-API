//Dependencies
const stages = require('express').Router()
const db = require('../models')
const {Stage} = db

//Find All Events
stages.get('/', async (req,res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch(error) {
        res.status(500).json(error)
    }
})

//Creat An Event
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'A New Event Has Been Added',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update A Stage
stages.put('/:id', async (req, res) => {
    try {
        const updateStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updateStage} Successfully`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Delete A Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deleteStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully Deleted ${deleteStage} Event`
        })
    }  catch(err) {
        res.status(500).json(err)
    }
})

//Find A Specific Stage
stages.get('/:id', async (req, res) => {
    try{
    const foundStage = await Stage.findOne({
        where: { stage_id: req.params.id}
    })
    res.status(200).json(foundStage)
} catch(err) {
    res.status(500).json(err)
}
})


//Export
module.exports = stages