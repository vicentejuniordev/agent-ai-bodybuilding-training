import { error } from "console";
import fastify from "fastify";

const app = fastify({
    logger: true
});

app.listen({port: Number(process.env.PORT) || 3333, host: '0.0.0.0'})
.then(()=>{
    console.log('Server is running');
})
.catch((error=>{
    console.log(error);
    process.exit(1);
}));

app.get('/', (req, res)=>{
    res.send('Hello World');
})