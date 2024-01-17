import './Error.scss';

import errorImage from '../../../assets/images/error-image.png';
import Button from '../../atoms/Button/Button';

function Error() {
    return (
        <div className='error-page'>
                <img src={errorImage} alt='oops'/>
                <h1>Oops...</h1>
                <p>Something went wrong.</p>
                <Button text='Refresh' buttonType='primary' clickHandler={() => window.location.reload()}/>
         
        </div>
    );
}

export default Error;
