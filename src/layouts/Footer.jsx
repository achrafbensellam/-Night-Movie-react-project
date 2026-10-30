import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">▶ Movie<span>Night</span></Link>
          <p>Your destination for discovering movies and creating unforgettable movie nights.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/watchlist">Watchlist</Link>
        </div>

        <div className="footer-about">
          <h3>About Movie Night</h3>
          <p>Discover, explore and save your favorite movies in one place.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Movie Night. All rights reserved.</p>
    </div>
    </footer>
  );
}

export default Footer;