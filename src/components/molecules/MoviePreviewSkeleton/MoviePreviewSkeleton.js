import Skeleton from 'react-loading-skeleton';
import './MoviePreviewSkeleton.scss';

function MoviePreviewSkeleton({cards}) {
    return (
        Array(cards).fill(0).map((card, i) => (<div key={i} className='movie-preview-skeleton'>
            <div className='movie-preview__image-container'>
                <Skeleton width={171} height={258}/>
            </div>
            <p className='movie-preview__title'>
                <Skeleton width={171}/>
            </p>
        </div>))
    )
}

export default MoviePreviewSkeleton;