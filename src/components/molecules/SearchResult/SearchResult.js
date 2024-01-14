import {Link} from 'react-router-dom';
import './SearchResult.scss';

function SearchResult({ id, posterPath, title, firstAirDate, mediaType }) {
    const url = mediaType === 'movie' ? `/movies/${id}` : `/series/${id}`;
    return (
        <Link to={url} className='search-result'>
            <div className='search-result__image'><img src={`https://image.tmdb.org/t/p/original/${posterPath}`} /></div>
            <div className='search-result-details'>
                <p className='search-result-details__title'>{title}</p>
                <p className='search-result-details__year'>{new Date(firstAirDate).getFullYear()}</p>
                <p className='search-result-details__type'>{mediaType}</p>
            </div>
        </Link>
    );
}

export default SearchResult;
