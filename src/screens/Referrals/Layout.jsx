import { Outlet, Navigate } from "react-router-dom";

function Layout({ isAuthenticated }) {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/ambassador/signup" replace />
  );
}
export default Layout;
