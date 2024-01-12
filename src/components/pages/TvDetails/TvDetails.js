import './TvDetails.scss';

import { useParams } from "react-router-dom";

import { useGetTvDetailsQuery } from '../../../api/api';
import DetailsHeader from '../../molecules/DetailsHeader/DetailsHeader';
import GenreTagsList from '../../molecules/GenreTagsList/GenreTagsList';


function TvDetails() {
    const { tvId } = useParams();
    const { data, error, isLoading, isFetching, isSuccess } = useGetTvDetailsQuery(tvId);

    console.log(data)

    if (isLoading || isFetching) {
        return <p>Loading</p>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <>
            <div>Tv details</div>
            <DetailsHeader
                type='series'
                title={data.name}
                releaseDate={data.first_air_date}
                length={data.number_of_seasons}
                rating={data.vote_average}
                totalNumberRatings={data.vote_count}
            />
            <GenreTagsList genres={data.genres} />

        </>
    );


}

export default TvDetails;
