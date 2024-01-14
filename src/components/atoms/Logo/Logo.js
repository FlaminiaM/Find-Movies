import {Link} from 'react-router-dom';
import './Logo.scss';
import logo from '../../../assets/images/logo.svg';

function Logo() {
    return (
        <Link to='/' className='logo'>
            <img src={logo} alt='logo' />
            <span>FindMovies</span>
        </Link>
    );
}

export default Logo;
