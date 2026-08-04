import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLoginOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { logout, isLoginOut };
}
