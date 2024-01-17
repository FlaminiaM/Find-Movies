import './WhereToWatch.scss';
import { useGetWatchProvidersQuery } from '../../../api/api';
import ProvidersList from '../../molecules/ProvidersList/ProvidersList';
import Error from '../Error/Error';

function WhereToWatch({id, type}) {
    const { data, error, isLoading, isFetching, isSuccess } = useGetWatchProvidersQuery({id, type});

    let rentList, streamList, buyList;

    if (isLoading || isFetching) {
        return <p>Loading</p>
    }

    if (error) {
        return <Error />
    }

    if(isSuccess){
        rentList = data?.results?.GB?.rent;
        streamList = data?.results?.GB?.flatrate;
        buyList = data?.results?.GB?.buy;
    }

    if((streamList === undefined || streamList.length === 0) && (rentList === undefined || rentList?.length === 0)  && (buyList === undefined || buyList?.length === 0)) {
        return;
    }

    return (
        <div className='watch-providers'>
            <h2>Whatch it now</h2>
            {streamList?.length > 0 && <ProvidersList providerType='Stream' providers={streamList}/>}
            {rentList?.length > 0 && <ProvidersList providerType='Rent' providers={rentList}/>}
            {buyList?.length > 0 &&<ProvidersList providerType='Buy' providers={buyList}/>}

        </div>
    );
}

export default WhereToWatch;
