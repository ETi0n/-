import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MainPage from './pages/MainPage/MainPage';
import PetitionForm from './pages/PetitionForm/PetitionForm';
import PetitionDetail from './pages/PetitionDetail/PetitionDetail';
import PetitionBoard from './pages/PetitionBoard/PetitionBoard';
import MyPage from './pages/MyPage/MyPage';

import './App.css';

const App = () => {
  const [petitions, setPetitions] = useState([]);

  const addPetition = (newPetition) => {
    setPetitions((prevPetitions) => [
      ...prevPetitions,
      { ...newPetition, id: prevPetitions.length + 1 },
    ]);
  };

  const updateLikes = (id) => {
    setPetitions((prevPetitions) =>
      prevPetitions.map((petition) =>
        petition.id === id
          ? { ...petition, likes: petition.likes + 1 }
          : petition
      )
    );
  };

  return (
    <Router>
      <div>
        <Header />
        <div className="page-wrapper">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/" element={<MainPage />} />
            <Route
              path="/petition-form"
              element={<PetitionForm addPetition={addPetition} />}
            />
            <Route
              path="/petition-detail/:id"
              element={
                <PetitionDetail
                  petitions={petitions}
                  updateLikes={updateLikes}
                />
              }
            />
            <Route
              path="/petition-board"
              element={<PetitionBoard petitions={petitions} />}
            />
            <Route path="/my-page" element={<MyPage petitions={petitions} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
