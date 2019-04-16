const projectDb = require('./data/helpers/projectModel')

const validateProject = (req, res, next) => {
    const {name, description} = req.body
    if(name && description){
        next()
        return
    }
    res.status(400).json({message: '-.-'})
}

const validateAction = async (req, res, next) => {
    const {project_id, description, notes} = req.body
    if(project_id && description.length <= 128 && notes){
        let projects = await projectDb.get()
        if(projects.filter(project => project.id === project_id).length > 0){
            next()
        }else{
            res.status(404).json({message: 'project not found'})
        }
        return
    }
    res.status(400).json({message: '-.-'})
}
module.exports = {
    validateProject,
    validateAction
}