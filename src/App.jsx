import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayOut from "./ui/AppLayOut";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
