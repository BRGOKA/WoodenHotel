import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBooking";
import { useParams } from "react-router-dom";

function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({ queryKey: ["booking"], queryFn: getBooking });
  return { isLoading, Booking, error };
}

export default useBooking;
