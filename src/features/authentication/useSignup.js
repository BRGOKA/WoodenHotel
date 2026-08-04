import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup } from "../../services/apiAuth";

function useSignup() {
  const { mutate: createUser, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success("new user created successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { createUser, isLoading };
}

export default useSignup;
