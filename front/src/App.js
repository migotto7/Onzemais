import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import AppRoutes from './appRoutes';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <Router >
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;