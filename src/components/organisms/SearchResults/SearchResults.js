import { useState, useEffect } from 'react';
import './SearchResults.scss';

import { useSearchMultiQuery } from '../../../api/api';

import Loader from '../../atoms/Loader/Loader';
import SearchResult from '../../molecules/SearchResult/SearchResult';


function SearchResults({ searchTerm, maxResultsNumber }) {
    const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);
    console.log("in search results", searchTerm)
    const { data, error, isLoading, isFetching } = useSearchMultiQuery(
        filteredSearchTerm
    );

    const results = data?.results ?? [];

    console.log("results", results);

    useEffect(() => {
        if (searchTerm.length === 0 || searchTerm.length > 4) {
            setFilteredSearchTerm(searchTerm);
        }
    }, [searchTerm]);


    // if (error) {
    //     return <div className="text-hint">Error while fetching books</div>;
    // }

    // if (isLoading) {
    //     return <div className="text-hint">Loading books...</div>;
    // }

    // if (isFetching) {
    //     return <div className="text-hint">Fetching books...</div>;
    // }

    // if (results.length === 0) {
    //     return <div className="text-hint">No books found</div>;
    // }

    return (
        <div className={(isLoading || isFetching) ? `search-results search-results--loading` : `search-results`}>
            {isLoading || isFetching
                ? <Loader />
                : (error
                    ? <p>There was an error please try again</p>
                    : results.slice(0, maxResultsNumber).map((result, i) => <SearchResult key={result.id} title={result.media_type === "tv" ? result.name : result.title} posterPath={result.poster_path} firstAirDate={result.media_type === "tv" ? result.first_air_date : result.release_date} mediaType={result.media_type} />))}
        </div>
    )
}

export default SearchResults;