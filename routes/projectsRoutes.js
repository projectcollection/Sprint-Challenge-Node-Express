const express = require('express')

const projectsDb = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        let projects = await projectsDb.get()
        res.status(200).json(projects)
    }catch(err){
        res.status(500).json({message: 'internal server error'})
    }
})

router.get('/:id', async (req, res) => {
    try{
        let project = await projectsDb.get(req.params.id)
        res.status(200).json(project)
    }catch(err){
        res.status(404).json({message: 'project not found'})
    }
})

// add middleware to validate
router.post('/', async (req, res) => {
    try{
        let newProject = await projectsDb.insert(req.body)
        res.status(201).json(newProject)
    }catch(err){
        res.status(500).json({message: 'try again later'})
    }
})

module.exports = router