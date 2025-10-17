import type { GymPlanRequest } from "./types";
import fs from 'fs';
import OpenAI from "openai";
import { buildSystemDocsPrompt, buildSystemPrompt, buildSystemUserPrompt } from "./prompt";

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY as string,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
}
)
export async function* generateGymPlan(input:GymPlanRequest) {
    const dataTec = fs.readFileSync('knowledge/gym-ai-diretrizes.md', 'utf-8');
    
    const stream = await client.chat.completions.create({
        model: 'gemini-2.5-flash',
        messages: [
            {"role": "system", content: buildSystemPrompt()},
            {"role": "user", content: buildSystemUserPrompt(input)}
        ],
        temperature: 0.6,
        stream: true //Faz com que a IA não retorne o texto de uma vez, ele vai processando e enviando.
    }
    )
    
    for await (const chunk of stream){
        const delta = chunk.choices[0]?.delta.content; //Pega apenas o conteúdo da chunk (pedaço de código que está sendo executado).
        if(delta) yield delta; //Enquanto estiver vindo dados ele para a execução da função e retorna.
    }
    return 'OK'
}