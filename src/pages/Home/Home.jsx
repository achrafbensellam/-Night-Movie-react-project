import './home.css'
import pic1 from '../../assets/img/pic1.jpg'
import pic2 from '../../assets/img/pic2.jpg'
import pic3 from '../../assets/img/pic3.jpg'
import MovieCard from './components/movieCrad';
function Home() {
// function HomePage() {
    const moviesArray = [
        { id: 1, title: 'Midnight Orbit', image: pic1, genre: 'Sci-Fi', description: 'One astronaut, one mysterious signal, and a midnight discovery.' },
        { id: 2, title: 'Hidden Trail', image: pic2, genre: 'Adventure', description: 'Friends follow an old map into an unforgettable mountain journey.' },
        { id: 3, title: 'Laugh Lab', image: pic3, genre: 'Comedy', description: 'A science experiment turns an ordinary classroom upside down.' },
        { id: 4, title: 'Mystery', image: pic1, genre: 'Mystery', description: 'A missing notebook changes everything for a young detective.' },
        { id: 5, title: 'Ocean Signal', image: pic2, genre: 'Adventure', description: 'A radio message sends two siblings across the open sea.' },
        { id: 6, title: 'Tomorrow s Code', image: pic3, genre: 'Sci-Fi', description: 'A programmer discovers an app that predicts tomorrow.' },
        { id: 7, title: 'Weekend Chaos', image: pic3, genre: 'Comedy', description: 'Four roommates try to organize theperfect Saturday.' },
        { id: 8, title: 'Silent Evidence', image: pic2, genre: 'Mystery', description: 'One hidden photo brings a long-forgotten mystery to light.' }
    ];

    // return (
        
            // <div className='MoviesDIVScards'>
            //     {moviesArray.map((e) => (
            //         <MovieCard
            //             key={e.id}
            //             id={e.id}
            //             title={e.title}
            //             image={e.image}
            //             genre={e.genre}
            //             description={e.description}
            //         />
            //     ))}
            // </div>
       
    // )
// }
// export default HomePage;
// import './Home.css';
    return (
        <>
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

                    <div className="">
                        <div className='MoviesDIVScards'>
                {moviesArray.map((e) => (
                    <MovieCard
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        image={e.image}
                        genre={e.genre}
                        description={e.description}
                    />
                ))}
            </div>
                    </div>
                    <h3>Movies Collection</h3>
                </div>
            </section>
        </main>
        </>
    )
}

export default Home;
