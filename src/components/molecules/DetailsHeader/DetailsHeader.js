import './DetailsHeader.scss';

import star from '../../../assets/icons/star.svg';

function DetailsHeader({ type, title, releaseDate, length, rating, totalNumberRatings }) {
    console.log("in header type is", type)
    console.log("in header title is", title)
    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
    }

    let lengthUi;

    if (type === 'movie') {
        const lengthInHoursMinutes = toHoursAndMinutes(length);
        lengthUi = <span className='details-header__info-container__length'>{lengthInHoursMinutes.hours}h {lengthInHoursMinutes.minutes}m</span>
    } else {
        lengthUi = <span className='details-header__info-container__length'>{length} seasons</span>
    }

    return (
        <div className='details-header'>
            <div className='details-header-inner container'>
                <div className='details-header__info-container'>
                    <p className='type'>{type.toUpperCase()}</p>
                    <h1 className='details-header__info-container__title'>{title.toUpperCase()}</h1>
                    <div className='details-header-inner__date-year'>
                        <span className='details-header__info-container__year'>{new Date(releaseDate).getFullYear()}</span>
                        {lengthUi}
                    </div>
                </div>
                <div className='details-header__rating-container'>
                    <div className='details-header__rating-star'>
                        <img className='details-header__rating-star-img' src={star} alt='rating star' />
                        <span className='rating-average'>{rating.toFixed(1)}</span>
                    </div>
                    <div className='details-header__rating-tot'>
                        <span className='tot-ratings'>{totalNumberRatings}</span>
                        <span>ratings</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHeader;
