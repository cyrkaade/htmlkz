// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// import { Outlet, Navigate } from 'react-router-dom'

// const PrivateRoutes = () => {
//     let auth = {'token':false}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/"/>
//     )
// }

// export default PrivateRoutes
import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected