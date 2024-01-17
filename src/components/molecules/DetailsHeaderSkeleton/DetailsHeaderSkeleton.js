import Skeleton from 'react-loading-skeleton';
import './DetailsHeaderSkeleton.scss';

function DetailsHeaderSkeleton() {
    return (
        <div className='details-header details-header--skeleton'>
            <div className='details-header-inner container'>
                <div className='details-header__info-container'>
                        <Skeleton className='type' width={52} />
                        <Skeleton width={326} height={48} className='details-header__info-container__title' />
                    <div className='details-header-inner__date-year'>
                        <Skeleton className='details-header__info-container__year' width={32}/>
                        <Skeleton className='details-header__info-container__length' width={46}/>
                    </div>
                </div>
                <div className='details-header__rating-container'>
                    <div className='details-header__rating-star'>
                        <Skeleton className='details-header__rating-star-img' width={48} height={48}/>
                        <Skeleton className='rating-average'  width={49} height={32}/>
                    </div>
                    <div className='details-header__rating-tot'>
                        <Skeleton className='tot-ratings' height={13} width={37}/>
                        <Skeleton height={13} width={37}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsHeaderSkeleton;