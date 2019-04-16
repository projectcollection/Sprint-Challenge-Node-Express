# Projects

## get `/api/projects` - get all projects

## get `/api/projects/:id` - get all data of a project

## get `/api/projects/:id/actions` - get all actions of a project

## post `/api/projects` - create a project
expected in body   
``` 
{
    name: string, #required
    description: string, #required
    completed: boolean
}
```
## put `/api/projects/:id` - update a project
expected one of properties to update in body   
``` 
{
    name: string,
    description: string,
    completed: boolean
}
```
## delete `/api/projects/:id` - delete a project

# Actions

## get `/api/actions` - get all actions

## get `/api/actions/:id` - get an action

## post `/api/actions` - create an action
expected in body   
``` 
{
    project_id: num, #required
    description: string, #required
    notes: string, #required
    completed: boolean
}
```
## put `/api/actions/:id` - update an action
expected one of properties to update in body   
``` 
{
    project_id: num, 
    description: string, 
    notes: string, 
    completed: boolean
}
```
## delete `/api/projects/:id` - delete an action