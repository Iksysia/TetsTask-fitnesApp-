import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {getSteps, postSteps} from "@/api/steps";

export const useSteps = () =>
  useQuery({
    queryKey: ['steps'],
    queryFn: getSteps,
    staleTime: 1000 * 60, // 1 хвилина (опціонально)
    refetchOnWindowFocus: true,
  });

export const useAddSteps = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postSteps,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['steps'] }); // ревалідація
    },
  });
};
