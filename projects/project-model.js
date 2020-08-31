const db = require('../data/config')

module.export = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
};

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks')
}

function addProject(project) {
    return db('projects').insert(project)
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function addTask(task) {
    return db('tasks').insert(task)
}