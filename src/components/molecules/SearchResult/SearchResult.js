import './SearchResult.scss';

function SearchResult({ posterPath, title, firstAirDate, mediaType }) {
    return (
        <div className='search-result'>
            <div className='search-result__image'><img src={`https://image.tmdb.org/t/p/original/${posterPath}`} /></div>
            <div className='search-result-details'>
                <p className='search-result-details__title'>{title}</p>
                <p className='search-result-details__year'>{new Date(firstAirDate).getFullYear()}</p>
                <p className='search-result-details__type'>{mediaType}</p>
            </div>
        </div>
    );
}

export default SearchResult;
