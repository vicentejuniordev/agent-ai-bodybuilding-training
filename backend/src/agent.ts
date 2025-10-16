import type { GymPlanRequest } from "./types";
import fs from 'fs';
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

if (!apiKey) {
    throw new Error('API_KEY environment variable is required');
}
const client = new GoogleGenAI({
    apiKey
});

export async function generateGymPlan(input:GymPlanRequest) {
    const dataTec = fs.readFileSync('knowledge/gym-ai-diretrizes.md', 'utf-8');
    const response = await client.models.generateContent({model: 'gemini-2.5-flash',contents: "Explain how AI works in a few words"})
    console.log(response.text);
    return 'OK'
}