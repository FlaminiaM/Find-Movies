import './GenreTagsList.scss';

import GenreTag from '../../atoms/GenreTag/GenreTag'

function GenreTagsList({ genres }) {
    return (
        <div className='genres-list'>
            {genres.map(genre => <GenreTag key={genre.id} genre={genre.name} />)}
        </div>
    );
}

export default GenreTagsList;
