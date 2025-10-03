import express from "express"
import { getChat, getQuery} from "./controller.js"
const router = express.Router()


router.get('', getChat)
router.post('/getQuery', getQuery)
router.use((req, res, next) => {
  res.status(404).json({"message" : "no such page exists. this is app sucks and everything else sucsk too i hate sustone"});
});
export {router}