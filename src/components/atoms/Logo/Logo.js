import './Logo.scss';
import logo from '../../../assets/images/logo.svg';
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' />
            <span>FindMovies</span>
        </div>
    );
}

export default Logo;
