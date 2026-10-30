import './movieCrad.css';
function MovieCard(props) {
    return (
        <>
            <div className='movieCard'>
                <div>
                    <div>
                        <img className='CardPic' src={props.image} alt="" />
                    </div>
                    <p className='movieCardCategory'>{props.genre}</p>
                </div>
                <div className='movieCardInfo'>
                    <p className='movieCardInfoPara1'>2025 - 109 min</p>
                    <p className='movieCardInfoPara2'>{props.title}</p>
                    <p className='movieCardInfoPara3'>{props.description}</p>
                    <button className='movieCardBTN'
                        onClick={() => props.addToWatchlist({
                            id: props.id,
                            title: props.title,
                            image: props.image,
                            genre: props.genre,
                            description: props.description
                        })}>
                        + Add to watch list
                    </button>
                </div>
            </div>
        </>
    )
}
export default MovieCard;
