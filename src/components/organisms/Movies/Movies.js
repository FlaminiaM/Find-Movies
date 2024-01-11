import { useGetTopRatedMoviesQuery } from '../../../api/movies'

import Loader from '../../atoms/Loader/Loader';
import MoviePreview from '../../molecules/MoviePreview/MoviePreview';
import Swiper from '../Swiper/Swiper';

function Movies({ }) {
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTopRatedMoviesQuery();

    console.log(movies)

    let content;
    if (isLoading) {
        content = <Loader />
    } else if (isSuccess) {
        console.log("success");
        content = <Swiper moviesData={movies.results} />

        if (movies) {
            console.log(movies.results)
        }
        console.log(movies)
        // content = <Swiper movies={movies} />
    } else if (isError) {
        content = <h1>Error</h1>
    }
    return (
        content
    )
}

export default Movies;