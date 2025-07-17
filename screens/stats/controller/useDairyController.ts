import React, {useCallback} from "react";
import {useAddSteps} from "@/hooks/useSteps";

export const useDairyController = (): [
  stepsAmount: string,
  setStepsAmount: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: () => void,
  isPending: boolean,
] => {
  
  const [stepsAmount, setStepsAmount] = React.useState<string>('');
  
  const {mutate: addSteps, isPending} = useAddSteps();
  
  const handleSubmit = useCallback(() => {
    if (!stepsAmount) return;
    addSteps(stepsAmount, {
      onSuccess: () => setStepsAmount(''),
    });
  }, [addSteps, stepsAmount]);
  
  return [stepsAmount, setStepsAmount, handleSubmit, isPending];
}
