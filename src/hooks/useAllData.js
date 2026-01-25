import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllData,
  updateAttendedLectures,
  updateTotalLectures,
} from "../services/apiData";

export function useSubjects() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["subjects"],
    queryFn: getAllData,
  });
  return {
    isLoading,
    data,
    error,
  };
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

export function useUpdateAttendedLectures() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateAttendedLectures,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });

  return { isLoading, mutate };
}
