import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaHeart } from 'react-icons/fa';

function Header({ watchlist }) {
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

          <NavLink to="/watchlist" className="watchlist-link">
            Watchlist
          </NavLink>
        </nav>

        {/* Navbar Button */}

        {/* Navbar Actions */}
        <div className="navbar-actions">

          <NavLink to="/watchlist" className="favorite-button">
            <FaHeart className="favorite-icon" />
            <span>My Favorites</span>

            <span className="watchlist-count">
              {watchlist.length}
            </span>
          </NavLink>

          <Link to="/#movies" className="nav-button">
            Explore Movies
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
