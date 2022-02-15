import React from 'react';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies.jsx';
import Search from './components/Search/Search.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
  
        <Routes>
          <Route path="search/:search" element={<Search />}/>
          <Route path="/" element={<Movies />} >
            <Route path=":movieType" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
