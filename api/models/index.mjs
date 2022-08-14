import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const mongoose = require('mongoose')

import { TodoTaskSchema } from "../schemas/index.mjs"

export const TodoTask = mongoose.model('TodoTask', TodoTaskSchema)