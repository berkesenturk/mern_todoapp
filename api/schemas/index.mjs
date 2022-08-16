import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const mongoose = require('mongoose')
 
export const TodoTaskSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
        default: "default-val"
    },
    label: {
        type: String,
        required: true,
        default: "todo"
    },
    category: {
        type: String,
        required: true,
        default: "none"
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        required: false
    }
},
{
    collection:'TodoTask',
    versionKey: false 
})