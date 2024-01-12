import './MovieDetails.scss';

import { useParams } from "react-router-dom";

import quote from '../../../assets/images/quote.svg'

import { useGetMovieDetailsQuery, useGetMovieCreditsQuery } from '../../../api/api';
import DetailsHeader from '../../molecules/DetailsHeader/DetailsHeader';
import GenreTagsList from '../../molecules/GenreTagsList/GenreTagsList';

function MovieDetails() {
    const { movieId } = useParams();
    const { data, error, isLoading, isFetching, isSuccess } = useGetMovieDetailsQuery(movieId)
    const { data: credits, error: isError, isLoading: loading, isFetching: fetching, isSuccess: success } = useGetMovieCreditsQuery(movieId);
    let directorsList, producersList, mainActorsList = [];
    console.log("credits", credits)

    console.log(data)

    if (isLoading || isFetching) {
        return <p>Loading</p>
    }

    if (error) {
        return <h1>Error</h1>
    }

    if (isSuccess) {
        directorsList = credits?.crew.filter((credit, i) => credit.job === "Director");
        producersList = credits?.crew.filter((credit, i) => credit.job === "Producer" && i < 4);
        mainActorsList = credits?.cast.filter((credit, i) => credit.known_for_department === "Acting" && i < 4);
    }

    return (
        <>
            <div>Movie details</div>
            <DetailsHeader
                type='movie'
                title={data.title}
                releaseDate={data.release_date}
                length={data.runtime}
                rating={data.vote_average}
                totalNumberRatings={data.vote_count}
            />
            <div className='movie-details-section container'>
                <div className='movie-details-section__poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})` }}></div>
                <div className='movie-details-section-info'>
                    <p className='movie-details-section-info__tagline'>
                        <img className='open-quote' src={quote} />
                        {data.tagline}
                        <img className='close-quote' src={quote} />
                    </p>
                    <GenreTagsList genres={data.genres} />
                    <p className='movie-details-section-info__description'>{data.overview}</p>
                    <div className='movie-details-section-info-cast'>
                        {
                            directorsList?.length > 0
                                ? (<p>{<span className='movie-details-section-info-cast__label'>{directorsList.length === 1 ? `Director:` : `Directors:`}</span>} {directorsList.map((credit, i) => `${credit.name} ${i < (directorsList.length - 1) ? ', ' : ''}`)}</p>)
                                : ''
                        }
                        {
                            producersList?.length > 0
                                ? (<p>{<span className='movie-details-section-info-cast__label'>{producersList.length === 1 ? `Producer:` : `Producers:`}</span>}  {producersList.map((credit, i) => `${credit.name} ${i < (producersList.length - 1) ? ', ' : ''}`)}</p>)
                                : ''
                        }
                        {
                            mainActorsList?.length > 0
                                ? (<p>{<span className='movie-details-section-info-cast__label'>{mainActorsList.length === 1 ? `Star:` : `Stars:`}</span>}  {mainActorsList.map((credit, i) => `${credit.name} ${i < (mainActorsList.length - 1) ? ', ' : ''}`)}</p>)
                                : ''
                        }
                        {
                            data?.production_countries?.length > 0
                                ? (<p>{<span className='movie-details-section-info-cast__label'>{data.production_countries.length === 1 ? `Country` : `Countries`} of origin:</span>} {data.production_countries.map((country, i) => `${country.name} ${i < (data.production_countries.length - 1) ? ', ' : ''}`)}</p>)
                                : ''
                        }
                        <p><span className='movie-details-section-info-cast__label'>Release date:</span> {new Date(data.release_date).toLocaleDateString("en-GB")}</p>
                    </div>
                </div>

            </div>
        </>
    );


}

export default MovieDetails;
