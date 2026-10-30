import './movieCrad.css';
import { FaCheck } from "react-icons/fa";

function MovieCard(props) {

    const isAdded = props.watchlist.some(
        (movie) => movie.id === props.id
    );

    function handleAdd() {
        props.addToWatchlist({
            id: props.id,
            title: props.title,
            image: props.image,
            genre: props.genre,
            description: props.description
        });
    }

    return (
        <div className='movieCard'>
            <div>
                <div>
                    <img
                        className='CardPic'
                        src={props.image}
                        alt={props.title}
                    />
                </div>

                <p className='movieCardCategory'>
                    {props.genre}
                </p>
            </div>

            <div className='movieCardInfo'>
                <p className='movieCardInfoPara1'>
                    2025 - 109 min
                </p>

                <p className='movieCardInfoPara2'>
                    {props.title}
                </p>

                <p className='movieCardInfoPara3'>
                    {props.description}
                </p>

                <button
                    className='movieCardBTN'
                    onClick={handleAdd}
                    disabled={isAdded}
                >
                    {isAdded ? (
                        <>
                            Added <FaCheck className="added-icon" />
                        </>
                    ) : (
                        '+ Add to watch list'
                    )}
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
