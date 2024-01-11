import Rating from '../../atoms/Rating/Rating';
import './MoviePreview.scss';

function MoviePreview({ image, rating, title }) {
    return (
        <div className='movie-preview'>
            <div className='movie-preview__image-container'>
                <div className='movie-preview__image-container-overlay'></div>
                <div className='movie-preview__poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})` }}></div>
                {/* <img className='movie-preview__poster' src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} /> */}
                <Rating rating={rating.toFixed(1)} />
            </div>
            <p className='movie-preview__title'>{title}</p>
        </div>
    )
}

export default MoviePreview;