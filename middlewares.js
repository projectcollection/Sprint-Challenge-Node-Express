const validateProject = (req, res, next) => {
    const {name, description} = req.body
    if(name && description){
        next()
        return
    }
    res.status(400).json({message: '-.-'})
}

const validateAction = (req, res, next) => {
    const {project_id, description, notes} = req.body
    if(project_id && description.length <= 128 && notes){
        next()
        return
    }
    res.status(400).json({message: '-.-'})
}
module.exports = {
    validateProject,
    validateAction
}