import './Home.css';
function Home() {
    return (
        <main className="home-page">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-label">YOUR CINEMATIC EXPERIENCE</span>
                    <h1>Discover Movies.<br />
                        <span>Experience Stories.</span></h1>
                    <p>Explore a world of movies, discover your next favorite film, and create your personal watchlist.</p>

                    <div className="hero-buttons">
                        <a href="#movies" className="primary-button">Explore Movies <span>→</span> </a>
                        <a href="/watchlist" className="secondary-button">My Watchlist </a>
                    </div>

                </div>
            </section>


            {/* Movies Section */}

            <section className="movies-section" id="movies">
                <div className="section-heading">
                    <div>
                        <span className="section-label">FIND YOUR NEXT FAVORITE</span>
                        <h2> Explore <span>Movies</span></h2>
                    </div>
                    <p>A world of stories waiting for you.</p>
                </div>

                {/* achraf et nawfal */}
                <div className="movies-placeholder">

                    <div className=""></div>
                    <h3>Movies Collection</h3>
                </div>
            </section>
        </main>
    );
}

export default Home;