const express = require("express")
const db = require("./project-model");

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await db.getProjects()
        res.status(200).json(projects);
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const project = req.body
        const projectId = await db.addProject(project)
        res.status(201).json(projectId)
    } catch (err) {
        next(err)
    }
})

router.get('/resources', async (req, res, next) => {
    try {
        const resources = await db.getResources()
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/resources', async (req, res, next) => {
    try {
        const resource = req.body
        const resourceId = await db.addResource(resource)
        res.status(201).json(resourceId)
    } catch(err) {
        next(err)
    }
})

router.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await db.getTasks()
        res.status(200).json(tasks)
    } catch(err) {
        next(err)
    }
});

router.post('/tasks', async (req, res, next) => {
    try {
        const task = req.body
        const taskId = await db.addTask(task)
        res.status(201).json(taskId)
    } catch(err) {
        next(err)
    }
})

module.exports = router