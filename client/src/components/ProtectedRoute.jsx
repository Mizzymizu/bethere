import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function ProtectedRoute(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;