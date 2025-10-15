import { resolvePtr } from "dns";
import type { FastifyInstance } from "fastify";
import { GymPlanSChema } from "../types";
import { error } from "console";
import { generateGymPlan } from "../agent";


export async function planRoutes(app:FastifyInstance) {
    app.post('/plan', async (request, reply)=>{
        const parse = GymPlanSChema.safeParse(request.body);
        if(!parse.success){
            return reply.send({
                error: 'ValidationError',
                details: parse.error.flatten((issue=> issue.message))
            })
        }

        try{
            const data = generateGymPlan(parse.data);

            return reply.send(data);
        }catch(err: any){
            request.log.error(err);
            reply.raw.write(`event: error\n  ${JSON.stringify(err.message)}`);
            reply.raw.end();
        }
    })
}