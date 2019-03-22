const express = require('express')

const projectsDb = require('../data/helpers/projectModel')

const router = express.Router()

const message = {
    serverError: 'internal server error',
    notFound: 'not found'
}

router.get('/', async (req, res) => {
    try{
        let projects = await projectsDb.get()
        res.status(200).json(projects)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

router.get('/:id', async (req, res) => {
    try{
        let project = await projectsDb.get(req.params.id)
        res.status(200).json(project)
    }catch(err){
        res.status(404).json({message: message.notFound})
    }
})

// add middleware to validate
router.post('/', async (req, res) => {
    try{
        let newProject = await projectsDb.insert(req.body)
        res.status(201).json(newProject)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

// add middleware to validate
router.put('/:id', async (req, res) => {
    try{
        let project = await projectsDb.update(req.params.id, req.body)
        res.status(200).json(project)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        let count = await projectsDb.remove(req.params.id)
        if(count > 0){
            res.status(200).json(count)
            return
        }
        res.status(404).json({message: message.notFound})
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

module.exports = router