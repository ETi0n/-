import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PetitionForm from './pages/PetitionForm/PetitionForm';
import PetitionDetail from './pages/PetitionDetail/PetitionDetail';
import PetitionBoard from './pages/PetitionBoard/PetitionBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/petition-form" element={<PetitionForm />} />
        <Route path="/petition-detail/:id" element={<PetitionDetail />} />
        <Route path="/petition-board" element={<PetitionBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
