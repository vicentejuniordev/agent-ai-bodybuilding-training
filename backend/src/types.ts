import * as z from "zod";

export const GymPlanSChema = z.object({
    nome: z.string().min(2),
    idade: z.number().positive(),
    dias_treino: z.number().positive(),
    objetivo: z.enum(['perder_peso', 'manter_peso', 'hipertofria']),
    sexo: z.enum(['masculino', 'feminino'])
});
    
export type GymPlanRequest  = z.infer<typeof GymPlanSChema>
