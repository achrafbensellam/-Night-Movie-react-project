/** ============================ start besmillah ================================*/
// import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
// import Watchlist from './pages/WatchList/watchlist.jsx';
import './App.css';
import Filter from './pages/Home/components/Filter';
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
