import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
    </Routes>
  );
}