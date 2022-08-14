import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const mongoose = require('mongoose')
 
export const TodoTaskSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
        default: "default-val"
    }
},
{
    collection:'TodoTask',
    versionKey: false 
})