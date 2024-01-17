import './Provider.scss';

function Provider({logo, name}) {
    return (
        <div className='provider'>
            <div className='provider__image' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${logo})`}}></div>
            <span className='provider__name'>{name}</span>
        </div>
    );
}

export default Provider;
