import Loader from '../../atoms/Loader/Loader';
import Swiper from '../Swiper/Swiper';

function TabContent({ type, apiQuery, name }) {
    const { data, error, isLoading, isFetching, isSuccess } = apiQuery(type);
    console.log(data)
    let content;
    if (isLoading) {
        content = <Loader />
    } else if (isSuccess) {
        console.log("success");
        content = <Swiper moviesData={data.results} name={name} type={type} />
    } else if (error) {
        content = <h1>Error</h1>
    }
    return (
        content
    )
}

export default TabContent;