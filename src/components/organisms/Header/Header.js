import { useState, useCallback, useEffect } from 'react';
import './Header.scss';

import useDebounce from '../../../customHook/useDebounce';

import Logo from '../../atoms/Logo/Logo';
import Input from '../../atoms/Input/Input';
import searchIcon from '../../../assets/icons/search.svg';
import SearchResults from '../SearchResults/SearchResults';

function Header({ }) {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchTerm = useDebounce(searchText, 500);

    return (
        <div className='header container'>
            <Logo />
            <div className='header__search'>
                <Input inputType='text'
                    name='search-movies'
                    placeholder='Search FindMovies'
                    icon={searchIcon}
                    inputValue={searchText}
                    onChangeHandler={(e) => setSearchText(e.target.value)} />
                {debouncedSearchTerm.length > 0 && <SearchResults searchTerm={debouncedSearchTerm} maxResultsNumber={5} />}
            </div>
        </div>
    )
}

export default Header;