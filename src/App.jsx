/** ============================ start besmillah ================================*/
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Watchlist from './pages/WatchList/watchlist.jsx';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('myFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      'myFavorites',
      JSON.stringify(watchlist)
    );
  }, [watchlist]);


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
      <Header watchlist={watchlist} />

      <Routes>

        <Route path="/" element={
          <Home
            watchlist={watchlist}
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
