import {supabase} from "@/api/index";

type StepType = {
  id: string;
  steps: number;
  created_at: string;
}
type GetStepsResponseType = StepType[];

export const postSteps = (steps: string) =>
  supabase.post(
  '/steps',
    {steps: Number(steps)},
  )

export const getSteps = () =>
  supabase.get('/steps')
    .then(res => res.data as GetStepsResponseType);
