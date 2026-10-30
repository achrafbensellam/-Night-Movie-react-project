/** ============================ start besmillah ================================*/
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Watchlist from './pages/WatchList/watchlist.jsx';
import './App.css';
import { useState } from 'react';
// import HomePage from './pages/Home/Home';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movie) {
    setWatchlist((prevWatchlist) => {
      const movieExist = prevWatchlist.some(
        (item) => item.id === movie.id);
      if (movieExist) {
        return prevWatchlist
      }

      return [...prevWatchlist, movie];

    })
  }

  function removeMovieWatchlist(id) {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== id

      ));
  }


  return (
    <div className="app">
      <Header />
      <Routes>

        <Route path="/" element={
          <Home
            // watchlist={watchlist}
            // setWatchlist={setWatchlist} 
            addToWatchlist={addToWatchlist}
            />} />
        <Route path="/watchlist" element={
          <Watchlist
            watchlist={watchlist}
            // setWatchlist={setWatchlist} 
            removeMovieWatchlist={removeMovieWatchlist}
            />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
