import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`booking #${data.id} checked-out successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => toast.error("there was a problem when checking out"),
  });
  return { checkout, isCheckingOut };
}

export default useCheckOut;
