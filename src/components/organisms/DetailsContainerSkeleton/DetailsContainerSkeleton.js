import Skeleton from 'react-loading-skeleton';
import './DetailsContainerSkeleton.scss';

function DetailsContainerSkeleton() {
    return (
        <div className='details container details-skeleton'>
            <div>
                <Skeleton className='details__poster' width={272} height={420} />
            </div>
            <div className='details-info'>
                <Skeleton className='details-info__tagline'/>
                <div className='genres-list'>
                    <Skeleton  width={60} height={36} className='genre-tag'/>
                    <Skeleton  width={60} height={36} className='genre-tag'/>
                </div>
                <Skeleton className='details-info__description' count={3}/>
                <div className='details-info-extra'>
                    <Skeleton className='details-info-extra__element' count={4}/>
                </div>
            </div>
        </div>
    )
}

export default DetailsContainerSkeleton;