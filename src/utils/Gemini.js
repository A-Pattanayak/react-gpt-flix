import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

export default genAI;