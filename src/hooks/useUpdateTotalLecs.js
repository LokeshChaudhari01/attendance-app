import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTotalLectures } from "../services/apiData";

export function useUpdateTotalLectures() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateTotalLectures,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });

  return { isLoading, mutate };
}

export function useUpdateTotalLectures() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateTotalLectures,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });

  return { isLoading, mutate };
}
