import './watchlist.css';
import '../../pages/Home/components/movieCrad.css';
function Watchlist({ watchlist, removeMovieWatchlist }) {


  return (
    <main className="watchlist-page">

      <section className="watchlist-header">
        <span className="section-label">YOUR PERSONAL COLLECTION</span>
        <h1>My <span>Watchlist</span></h1>
        <p>Keep track of the movies you want to watch.</p>
      </section>

      <section className="watchlist-content">
        {watchlist.length === 0 ? (
          <div className="empty-watchlist">

            <h2>Your Watchlist is Empty</h2>
            <p>You haven't saved any movies yet. Discover movies and add your favorites here.</p>
          </div>

        ) : (
          <div >
            {watchlist.map((movie) => (
              <div className='movieCard' key={movie.id}>

                <img className="CardPic"
                  src={movie.image} alt={movie.title} />

                <p className='movieCardCategory'>{movie.genre}</p>
                <div className='movieCardInfo'>
                  <p className='movieCardInfoPara1'>2025 - 109 min</p>

                  <h2 className='movieCardInfoPara2'>{movie.title}</h2>

                  <p className='movieCardInfoPara3'>{movie.description}</p>

                  <button className="movieCardBTN"

                    onClick={() => removeMovieWatchlist(movie.id)}>
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
        {/* walid display  */}
      </section>
    </main>
  );
}

export default Watchlist;
