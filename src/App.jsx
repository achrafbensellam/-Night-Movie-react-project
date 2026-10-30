/** ============================ start besmillah ================================*/
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Watchlist from './pages/WatchList/watchlist.jsx';
import './App.css';
<<<<<<< HEAD
import Filter from './pages/Home/components/Filter';
=======
// import HomePage from './pages/Home/Home';

>>>>>>> c29973889c3a11bd61512c1e43c7f35929b03c3c
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
