import express from "express";
import { router as chatRoutes } from "./src/routes.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({
    origin: '*' 
}));

app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.json());
app.use(chatRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});