// task crud via express mongodb

// add: test, log, error handling, async, jwt, dockerizing apps 

import { response } from 'express';
import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const mongoose = require('mongoose')

import { TodoTask } from './models/index.mjs'

const express = require('express')
const app = express()
const port = 3001

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
}

app.get('/tasksList', async (req, res) => {

    await TodoTask.find()
                  .exec()
                  .then((tasksList) => res.status(200).json({tasksList}))
                  .catch((err) => res.status(404).json({error: err}))
})

app.get(`/tasks/:_id`, async (req, res) => {

    await TodoTask.find({ _id: req.params._id })
                  .exec()
                  .then(( response ) => { res.status(200).send(response) })
                  .catch((err) => { console.log(err) })
})

app.post(`/tasks`, async (req, res) => {
    let task = new TodoTask({ 
                                taskname: req.body.taskname, 
                                label: req.body.label, 
                                category: req.body.category, 
                                isCompleted: req.body.isCompleted, 
                                date: new Date(req.body.date)
                            })

    return await task.save()
                     .then( item => { res.send(task) })
                     .catch(err => {
                        res.status(400).send(`unable to save to database. message: ${err}`)
                     });
})

app.put(`/tasks/:_id`, async(req, res) => {

    let taskDocument = await TodoTask.findOneAndUpdate(
                { _id: req.params._id }, 
                {
                    taskname: req.body.taskname, 
                    label: req.body.label, 
                    category: req.body.category, 
                    isCompleted: req.body.isCompleted, 
                    date: new Date(req.body.date)
                },
                { new: "true" }
            )
    
    res.status(200).send(taskDocument)
})

app.delete(`/tasks/:_id`, async(req, res) => {
    
    let value = await TodoTask.findOneAndRemove(
            { _id: req.params._id }
    )
    
    if(value === null) 
        res.status(400).send((err) => `Something is wrong! Message ${err}`)
    else 
        res.status(200).send(`Deleted data: ${value}`)
})

app.listen(port, () => {
    console.log(`Todo-app listening on port ${port}`)
})