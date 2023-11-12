import React, { useContext } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';


import { Context } from './Context/AuthContext';

import Login from './pages/login';
import Private from './pages/private';
import Signin from './pages/signin';


function LogedRoutes() {
  const { loading, authenticated } = useContext(Context);

  if(loading){
    return <h1>Loading...</h1>
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
}

function AdminRoutes(){
  const { user } = useContext(Context);

  if(user.perfil !== 'admin'){
    return <Navigate to="/privado" />;
  }

  return <Outlet/>;
}

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route element={<LogedRoutes/>}>
        <Route path="/privado" element={<Private/>} />
        <Route path="/admin" element={<AdminRoutes/>}>
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}
