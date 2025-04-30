import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserId } from "../../app/features/auth/registerSlice";

const ProtectedRoute = ({ children }) => {
  const userId = useSelector(UserId);

  const isAuthenticated = !!userId; // Checks if userId exists

  if (!isAuthenticated) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

export default ProtectedRoute;
