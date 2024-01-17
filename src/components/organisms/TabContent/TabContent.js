import Swiper from '../Swiper/Swiper';
import MoviePreviewSkeleton from '../../molecules/MoviePreviewSkeleton/MoviePreviewSkeleton';
import './TabContent.scss';

function TabContent({ type, apiQuery, name }) {
    const { data, error, isLoading, isFetching, isSuccess } = apiQuery(type);
    
    let numberOfSkeletonCards;
    const innerWidth = window.innerWidth;
    switch(true) {
        case innerWidth < 660:
            numberOfSkeletonCards = 1;
          break;
        case innerWidth >= 660 && innerWidth < 768:
            numberOfSkeletonCards = 3;
          break;
        case innerWidth >= 768 && innerWidth < 1020:
            numberOfSkeletonCards = 5;
          break;
        case innerWidth >= 1020 && innerWidth < 1650:
            numberOfSkeletonCards = 6;
          break;
        default:
            numberOfSkeletonCards = 8;
      }

    if (isLoading) {
        return <div className='movie-preview-skeletons'><MoviePreviewSkeleton cards={numberOfSkeletonCards}/></div>
    }  
    
    if (error) {
        <h1>Error</h1>
    }

    return (
        <Swiper moviesData={data.results} name={name} type={type} />
    )
}

export default TabContent;