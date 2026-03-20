import React from 'react';
import NavBar from './components/NavBar'
import RecipeDetailView from './components/RecipeDetailView'
import CuisineBar from './components/Cuisine'
import HomeView from './components/HomeView'
import SearchView from './components/SearchView'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <main className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <NavBar />
          <Routes>
            <Route />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App;