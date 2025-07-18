import {supabase} from "@/api/index";

export type StepType = {
  id: string;
  steps: number;
  created_at: string;
}
type GetStepsResponseType = StepType[];

export const postSteps = (steps: number) =>
  supabase.post('/steps', {steps})

export const getSteps = () =>
  supabase.get('/steps')
    .then(res => res.data as GetStepsResponseType);
