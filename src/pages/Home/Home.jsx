import { useState } from 'react';
import './home.css';
import './home-extra.css';
import { CiSearch } from "react-icons/ci";
import MovieCard from './components/movieCrad';
import './components/Filter.css'

function Home({ watchlist, addToWatchlist }) {

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all');


    const moviesArray = [
        { id: 1, title: 'Midnight Orbit', image: "https://m.media-amazon.com/images/M/MV5BZjE3ZDI0MmItMDIyMC00NzU2LTk2OTQtZTUxYTlkMjlkNmY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg", genre: 'Sci-Fi', description: 'One astronaut, one mysterious signal, and a midnight discovery.' },
        { id: 2, title: 'Hidden Trail', image: "https://m.media-amazon.com/images/M/MV5BOThjZGM1Y2QtYTZmOS00NGE3LTk0MjEtMWM2Y2QyM2VkMmE3XkEyXkFqcGc@._V1_.jpg", genre: 'Adventure', description: 'Friends follow an old map into an unforgettable mountain journey.' },
        { id: 3, title: 'Laugh Lab', image: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2Fi7UyjfPio0VFHB9rBUZSFyhOoM8.jpg&output=webp&q=50&n=-1", genre: 'Comedy', description: 'A science experiment turns an ordinary classroom upside down.' },
        { id: 4, title: 'Mystery', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAahQU7r3j2EJe1vxGI0NoQ6JxSygKlWEEpBDqAveYIEV-BuLk26JiL0g&s=10", genre: 'Mystery', description: 'A missing notebook changes everything for a young detective.' },
        { id: 5, title: 'Ocean Signal', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVw1he5AgPXIUS_biZyHNIok5duUje_jmnib4Uxic-Q&s=10", genre: 'Adventure', description: 'A radio message sends two siblings across the open sea.' },
        { id: 6, title: 'Tomorrow s Code', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8Tc5wat9Fk6gDJnqyztlHjFOLWaICRt7ZjW4BJlnHwrYmPSKWo51aQA&s=10", genre: 'Sci-Fi', description: 'A programmer discovers an app that predicts tomorrow.' },
        { id: 7, title: 'Weekend Chaos', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTixG0GKZBZ9hDsRrdy4jNOfBQMT5NzljSPug38vY4jA&s=10", genre: 'Mystery', description: 'Four roommates try to organize the perfect Saturday.' },
        { id: 8, title: 'Silent Evidence', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNOMCL9r4iXSlcsGOnhRfQm9etyiGoOMhDcR-QFlqmA&s=10", genre: 'Mystery', description: 'One hidden photo brings a long-forgotten mystery to light.' }
    ];


    const displayedMovies = moviesArray.filter((movie) => {

        if (type !== 'all') {

            if (movie.genre.toLowerCase() !== type.toLowerCase()) {
                return false;
            }
        }


        if (search !== '') {

            if (!movie.title.toLowerCase().includes(search.toLowerCase())) {

                return false
            }
        }

        return true
    })

    return (
        <>
            <main className="home-page">

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

                <section className="movies-section" id="movies">
                    <div className="section-heading">
                        <div>
                            <span className="section-label">FIND YOUR NEXT FAVORITE</span>
                            <h2> Explore <span>Movies</span></h2>
                        </div>
                        <p>{displayedMovies.length} Available Movies</p>
                        <p>A world of stories waiting for you.</p>
                    </div>

                    <div className="contaFilter" style={{ marginBottom: '30px' }}>
                        <div className="divofSearchAndselect" >
                            <div className="searchBox">
                                <CiSearch className='iconSearch' /> <input
                                    className="searchinpt"
                                    placeholder="Search the movie" type="search" value={search} onChange={e => setSearch(e.target.value)} />
                            </div>
                            <div className="selectdiv">
                                <select className="theselectinpt" onChange={e => setType(e.target.value)} value={type}>
                                    <option value="all">All Genres</option>

                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Mystery">Mystery</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    <div className="movies-placeholder">

                        <div className='MoviesDIVScards'>

                            {displayedMovies.length > 0 ? (

                                displayedMovies.map((e) => (
                                    <MovieCard
                                        key={e.id}
                                        id={e.id}
                                        title={e.title}
                                        image={e.image}
                                        genre={e.genre}
                                        description={e.description}
                                        addToWatchlist={addToWatchlist}
                                        watchlist={watchlist}

                                    />
                                ))

                            ) : (

                                <p className='notfound'>
                                    No movies found matching your search.
                                </p>

                            )}

                        </div>

                    </div>
                </section >
            </main >
        </>
    );
}

export default Home;