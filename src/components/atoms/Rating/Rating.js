import './Rating.scss';
import star from '../../../assets/icons/star.svg'

function Rating({ rating }) {
    return (
        <span className='rating'>
            <img src={star} alt='rating star' />
            {rating}
        </span>
    )
}

export default Rating;