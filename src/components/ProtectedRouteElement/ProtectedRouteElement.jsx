import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element: Component, ...props }) {
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRouteElement;
