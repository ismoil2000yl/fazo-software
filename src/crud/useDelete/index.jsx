import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryBuilder, api } from "services";

const useDelete = ({
  url,
  name,
  params,
  updateKey = "",
  onSuccess = () => {},
  onError = () => {},
}) => {
  const queryClient = useQueryClient();
  const data = useMutation({
    mutationKey: name,
    mutationFn: (id) => api.delete(queryBuilder(`${url}/${id}`, params)),
    onSuccess: (data) => {
      onSuccess(data);
      if (updateKey) queryClient.invalidateQueries({ queryKey: updateKey });
    },
    onError: (error) => onError(error),
  });

  return data;
};

export default useDelete;
