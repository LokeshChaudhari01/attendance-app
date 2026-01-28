import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyAttendance,
  updateAttendedLectures,
  updateTotalLectures,
} from "../services/apiData";

export function useSubjects() {
  const { isLoading, data, error ,isError} = useQuery({
    queryKey: ["attendance"],
    queryFn: getMyAttendance,
  });

  return {
    isLoading,
    data: data?.attendance || [],
    error,
    isError,
  };
}

export function useUpdateTotalLectures() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateTotalLectures,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
  });

  return { isLoading, mutate };
}

export function useUpdateAttendedLectures() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateAttendedLectures,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
  });

  return { isLoading, mutate };
}
