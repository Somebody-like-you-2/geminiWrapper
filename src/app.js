import express from "express"
import { router as chatRoutes } from "./routes.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())
app.use(chatRoutes)


app.listen(4000)