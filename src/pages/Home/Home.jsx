import './home.css'
import pic1 from '../../assets/img/pic1.jpg'
import pic2 from '../../assets/img/pic2.jpg'
import pic3 from '../../assets/img/pic3.jpg'
import MovieCard from './components/movieCrad';
function HomePage() {
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

    return (
        <>
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
        </>
    )
}
export default HomePage;