import './MovieDetails.scss';

import { useParams } from "react-router-dom";

import quote from '../../../assets/images/quote.svg'

import { useGetMovieDetailsQuery, useGetMovieCreditsQuery } from '../../../api/api';
import DetailsHeader from '../../molecules/DetailsHeader/DetailsHeader';
import GenreTagsList from '../../molecules/GenreTagsList/GenreTagsList';
import CastAndCrew from '../../organisms/CastAndCrew/CastAndCrew';
import WhereToWatch from '../../organisms/WhereToWatch/WhereToWatch';

function MovieDetails() {
    const { movieId } = useParams();
    const { data, error, isLoading, isFetching, isSuccess } = useGetMovieDetailsQuery(movieId)

    console.log(data)

    if (isLoading || isFetching) {
        return <p>Loading</p>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <>
            <DetailsHeader
                type='movie'
                title={data.title}
                releaseDate={data.release_date}
                length={data.runtime}
                rating={data.vote_average}
                totalNumberRatings={data.vote_count}
            />
            <div className='movie-details container'>
                <div>
                    <div className='movie-details__poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})` }}></div>
                </div>
                <div className='movie-details-info'>
                    <p className='movie-details-info__tagline'>
                        <img className='open-quote' src={quote} />
                        {data.tagline}
                        <img className='close-quote' src={quote} />
                    </p>
                    <GenreTagsList genres={data.genres} />
                    <p className='movie-details-info__description'>{data.overview}</p>
                    <div className='movie-details-info-extra'>
                            <CastAndCrew id={movieId} type='movie' />
                            {
                                data?.production_countries?.length > 0
                                    ? (<p>{<span className='movie-details__label'>{data.production_countries.length === 1 ? `Country` : `Countries`} of origin:</span>} {data.production_countries.map((country, i) => `${country.name} ${i < (data.production_countries.length - 1) ? ', ' : ''}`)}</p>)
                                    : ''
                            }
                            <p><span className='movie-details__label'>Release date:</span> {new Date(data.release_date).toLocaleDateString("en-GB")}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <WhereToWatch id={movieId}/>
            </div>
            
        </>
    );


}

export default MovieDetails;
