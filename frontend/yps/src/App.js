import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetitionForm from './pages/PetitionForm/PetitionForm';
import PetitionDetail from './pages/PetitionDetail/PetitionDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetitionForm />} />
        <Route path="/petition-detail/:id" element={<PetitionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
