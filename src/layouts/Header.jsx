import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="navbar">

        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>Movie<span className="logo-highlight">Night</span></span>
        </Link>

        {/* Navigation Links */}
        <nav className="navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>

        {/* Navbar Button */}
        <a href="#movies" className="nav-button">Explore Movies</a>
      </div>
    </header>
  );
}

export default Header;