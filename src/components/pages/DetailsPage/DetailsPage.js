import './DetailsPage.scss';
import { useParams } from "react-router-dom";

import quote from '../../../assets/images/quote.svg';

import Error from '../../organisms/Error/Error';

import { useGetDetailsQuery } from '../../../api/api';

import DetailsHeader from '../../molecules/DetailsHeader/DetailsHeader';
import GenreTagsList from '../../molecules/GenreTagsList/GenreTagsList';
import CastAndCrew from '../../organisms/CastAndCrew/CastAndCrew';
import WhereToWatch from '../../organisms/WhereToWatch/WhereToWatch';

import DetailsHeaderSkeleton from '../../molecules/DetailsHeaderSkeleton/DetailsHeaderSkeleton';
import DetailsContainerSkeleton from '../../organisms/DetailsContainerSkeleton/DetailsContainerSkeleton';

function DetailsPage({type}) {
    const { id } = useParams();
    const { data, error, isLoading, isFetching } = useGetDetailsQuery({type, id});

    if(isLoading || isFetching){
        return <div><DetailsHeaderSkeleton /><DetailsContainerSkeleton /></div>
    }

    if (error) {
        return <Error />
    }
    return (
        <>
            <DetailsHeader
                type={type}
                title={type === "movie" ? data.title : data.name}
                releaseDate={type === "movie" ? data.release_date : data.first_air_date}
                length={type === "movie" ? data.runtime : data.number_of_seasons}
                rating={data.vote_average}
                totalNumberRatings={data.vote_count}
            />
            <div className='details container'>
                <div>
                    <div className='details__poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})` }}></div>
                </div>
                <div className='details-info'>
                    {
                        data.tagline.length > 0 && <p className='details-info__tagline'>
                            <img className='open-quote' src={quote} alt='open quote' />
                            {data.tagline}
                            <img className='close-quote' src={quote} alt='close quote' />
                        </p>
                    }
                    <GenreTagsList genres={data.genres} />
                    <p className='details-info__description'>{data.overview}</p>
                    <div className='details-info-extra'>
                            <CastAndCrew id={id} type={type} />
                            {
                                data?.production_countries?.length > 0
                                    ? (<p>{<span className='details__label'>{data.production_countries.length === 1 ? `Country` : `Countries`} of origin:</span>} {data.production_countries.map((country, i) => `${country.name} ${i < (data.production_countries.length - 1) ? ', ' : ''}`)}</p>)
                                    : ''
                            }
                             <p><span className='details__label'>Release date:</span> {new Date(type === 'movie' ? data.release_date : data.first_air_date).toLocaleDateString("en-GB")}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <WhereToWatch id={id} type={type}/>
            </div>
            
        </>
    );


}

export default DetailsPage;
