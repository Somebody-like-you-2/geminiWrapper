import express from "express"
import { getChat, getQuery} from "./controller.js"
const router = express.Router()


router.get('/chat', getChat)
router.post('/getQuery', getQuery)

export {router}