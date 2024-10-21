// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './App';
import BlessingPlanPage from './LogoDetailsPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/trilochan" element={<HomePage />} />
        <Route path="/blessing-plan" element={<BlessingPlanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
