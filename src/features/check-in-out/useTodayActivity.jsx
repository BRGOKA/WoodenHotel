import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

function useTodayActivity() {
  const { isLoading, data: stays } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["Today-Activity"],
  });
  return { isLoading, stays };
}

export default useTodayActivity;
