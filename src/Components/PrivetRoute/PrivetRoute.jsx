import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivetRoute;

/**
 * ------------------
 *          STEPS
 * -------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup the private router
 * 5. handle loading
 */
