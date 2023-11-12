import React, { useContext } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';


import { Context } from './Context/AuthContext';

import Login from './pages/login';
import Private from './pages/private';


function PrivateRoutes() {
  const { loading, authenticated } = useContext(Context);

  if(loading){
    return <h1>Loading...</h1>
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
}


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/privado" element={<Private/>} />
      </Route>
    </Routes>
  );
}
