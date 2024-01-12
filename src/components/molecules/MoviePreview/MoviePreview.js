import Rating from '../../atoms/Rating/Rating';
import './MoviePreview.scss';

import { Link } from "react-router-dom";

function MoviePreview({ type, id, image, rating, title }) {

    const url = type === 'movies' ? `/movies/${id}` : `/series/${id}`;
    return (
        <Link className='movie-preview' to={url}>
            <div className='movie-preview__image-container'>
                <div className='movie-preview__image-container-overlay'></div>
                <div className='movie-preview__poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})` }}></div>
                {/* <img className='movie-preview__poster' src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} /> */}
                <Rating rating={rating.toFixed(1)} />
            </div>
            <p className='movie-preview__title'>{title}</p>
        </Link>
    )
}

export default MoviePreview;