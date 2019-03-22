const express = require('express')

const actionsDb = require('../data/helpers/actionModel')
const {validateAction} = require('../middlewares')

const router = express.Router()

const message = {
    serverError: 'internal server error',
    notFound: 'not found'
}

router.get('/', async (req, res) => {
    try{
        let actions = await actionsDb.get()
        res.status(200).json(actions)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

router.get('/:id', async (req, res) => {
    try{
        let action = await actionsDb.get(req.params.id)
        res.status(200).json(action)
    }catch(err){
        res.status(404).json({message: message.notFound})
    }
})

router.post('/', validateAction, async (req, res) => {
    try{
        let newaction = await actionsDb.insert(req.body)
        res.status(201).json(newaction)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

router.put('/:id', async (req, res) => {
    try{
        let action = await actionsDb.update(req.params.id, req.body)
        res.status(200).json(action)
    }catch(err){
        res.status(500).json({message: message.serverError})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        let count = await actionsDb.remove(req.params.id)
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