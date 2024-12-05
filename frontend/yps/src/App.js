import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetitionForm from './pages/PetitionForm/PetitionForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetitionForm />} />
      </Routes>
    </Router>
  );
};

export default App;