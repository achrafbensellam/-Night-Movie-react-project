import './watchlist.css';
function Watchlist() {
  return (
    <main className="watchlist-page">

      <section className="watchlist-header">
        <span className="section-label">YOUR PERSONAL COLLECTION</span>
        <h1>My <span>Watchlist</span></h1>
        <p>Keep track of the movies you want to watch.</p>
      </section>

      <section className="watchlist-content">
        
        {/* walid display  */}
        <div className="empty-watchlist">

          <h2>Your Watchlist is Empty</h2>
          <p>You haven't saved any movies yet. Discover movies and add your favorites here.</p>
        </div>
      </section>
    </main>
  );
}

export default Watchlist;