// // PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token'); // Example: Check your authentication status

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
//     />
//   );
// };

// export default PrivateRoute;
