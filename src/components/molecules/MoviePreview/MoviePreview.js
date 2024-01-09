import Rating from '../../atoms/Rating/Rating';
import './MoviePreview.scss';

function MoviePreview({ image, rating, title }) {
    return (
        <div className='movie-preview'>
            <div className='movie-preview__image-container'>
                <div className='movie-preview__image-container-overlay'></div>
                <img src={image} alt={title} />
                <Rating rating={rating} />
            </div>
            <p className='movie-preview__title'>{title}</p>
        </div>
    )
}

export default MoviePreview;