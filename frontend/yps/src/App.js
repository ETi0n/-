import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetitionForm from './pages/PetitionForm/PetitionForm';
import PetitionDetail from './pages/PetitionDetail/PetitionDetail';
import PetitionBoard from './pages/PetitionBoard/PetitionBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetitionForm />} />
        <Route path="/petition-detail/:id" element={<PetitionDetail />} />
        <Route path="/petition-board" element={<PetitionBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
