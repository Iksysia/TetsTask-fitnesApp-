import React, {useCallback} from "react";
import {useAddSteps} from "@/hooks/useSteps";
import {isValidNumber} from "@/utils/isValidNumber";
import {Keyboard} from "react-native";

type UseDairyControllerType = [
  stepsAmount: string,
  setStepsAmount: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: () => void,
  isPending: boolean,
  userInputError: UserInputErrorType,
  clearErrors: () => void
]

type UserInputErrorType = { isError: boolean, errorMessage: string }

const initialUserError = { isError: false, errorMessage: '' }

export const useDairyController = (): UseDairyControllerType => {
  const [stepsAmount, setStepsAmount] = React.useState<string>('');
  const [userInputError, setUserInputError] = React.useState<UserInputErrorType>(initialUserError);
 
  const {mutate: addSteps, isPending} = useAddSteps();
  
  const clearErrors = () => setUserInputError(initialUserError);
  
  const handleSubmit = useCallback(() => {
    /* Hack for TextInput onBluer effect worked properly */
    Keyboard.dismiss();
    
    const userInput = isValidNumber(stepsAmount)
    
    if (!userInput) {
      setUserInputError({isError: true, errorMessage: 'Please enter valid number'});
      return;
    };
    
    setUserInputError({isError: false, errorMessage: '' });
    addSteps(userInput, {
      onSuccess: () => setStepsAmount(''),
    });
  }, [addSteps, stepsAmount]);
  
  return [stepsAmount, setStepsAmount, handleSubmit, isPending, userInputError, clearErrors];
}
