import type { GymPlanRequest } from "./types";

export async function generateGymPlan(input:GymPlanRequest) {
    console.log(input);
    return input;
}