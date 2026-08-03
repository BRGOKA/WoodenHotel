import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRout({ children }) {
  const navigate = useNavigate();
  // TODO:Load autherized users
  const { user, isLoading } = useUser();

  // TODO:while loading show a spinner
  if (isLoading) return <Spinner />;

  // TODO: if no authed user redirect to log in page
  if (!user) Navigate("/login");

  // TODO:
  return children;
}

export default ProtectedRout;
