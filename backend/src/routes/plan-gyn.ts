import { resolvePtr } from "dns";
import type { FastifyInstance } from "../../node_modules/fastify/fastify";


export async function planRoutes(app:FastifyInstance) {
    app.post('/plan', async (request, reply)=>{
        reply.send('Rota de plano para academia');
    })
}