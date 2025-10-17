import type { FastifyInstance } from "fastify";
import { GymPlanSChema } from "../types";
import { generateGymPlan } from "../agent";


export async function planRoutes(app:FastifyInstance) {
    app.post('/plan', async (request, reply)=>{

        reply.raw.setHeader('Access-Control-Allow-Origin', '*'); // Permite que qualquer aplicação posso fazer requisições e tenha os dados.
        reply.raw.setHeader('Content-Type', 'text/plain; charset=utf-8',); //Avisa ao navegador que p que vai chegar é um texto simples.

        reply.raw.setHeader('Content-Type', 'text/event-stream');// Avisa ao navegador que chegará como fluxo de eventos, parte após parte dos dados.
        reply.raw.setHeader('Cache-Control', 'no-cache');// Impede que o navegador guarde uma memória cache.
        reply.raw.setHeader('Connection', 'keep-alive'); // Faz com que o servidor e o front-end  tenha uma comunicação aberta, assim ele não encerra a comunicação a a cada resposta, deixando possível o fluxo de eventos.

        const parse = GymPlanSChema.safeParse(request.body);
        if(!parse.success){
            return reply.send({
                error: 'ValidationError',
                details: parse.error.flatten((issue=> issue.message))
            })
        }

        try{
            for await(const delta of generateGymPlan(parse.data)){
                console.log(delta);
                reply.raw.write(delta);
            }

            reply.raw.end();
        }catch(err: any){
            request.log.error(err);
            reply.raw.write(`event: error\n  ${JSON.stringify(err.message)}`);
            reply.raw.end();
        }

        return reply;
    })
}