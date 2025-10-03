import dotenv from 'dotenv'; // default import
import { GoogleGenAI } from '@google/genai';

dotenv.config(); // load .env

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  vertexai: false,
});

export const generateContent = async (query) => {
  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
    });
    return response.text
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

