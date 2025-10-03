import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { generateContent } from './gemini.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getChat = (req, res) =>
{
    res.sendFile(path.join(__dirname,"./views/chat.html"))
}
export const getQuery = async(req, res) =>
{   
    const aiResponse = await generateContent(req.body.query)

    res.json({"message": aiResponse})
}
