import { useGetCreditsQuery } from '../../../api/api';

import Error from '../Error/Error';

function CastAndCrew({type, id}) {
    const { data:credits, error, isSuccess } = useGetCreditsQuery({id,type});
    let directorsList, producersList, mainActorsList = [];

    if (error) {
        return <Error />
    }

    if (isSuccess) {
        directorsList = credits?.crew.filter((credit, i) => credit.job === "Director");
        producersList = credits?.crew.filter((credit, i) => credit.job === "Producer" && i < 4);
        mainActorsList = credits?.cast.filter((credit, i) => credit.known_for_department === "Acting" && i < 4);
    }

    return (
        <div className='movie-details-cast'>
            {
                directorsList?.length > 0
                    ? (<p>{<span className='movie-details__label'>{directorsList.length === 1 ? `Director:` : `Directors:`}</span>} {directorsList.map((credit, i) => `${credit.name} ${i < (directorsList.length - 1) ? ', ' : ''}`)}</p>)
                    : ''
            }
            {
                producersList?.length > 0
                    ? (<p>{<span className='movie-details__label'>{producersList.length === 1 ? `Producer:` : `Producers:`}</span>}  {producersList.map((credit, i) => `${credit.name} ${i < (producersList.length - 1) ? ', ' : ''}`)}</p>)
                    : ''
            }
            {
                mainActorsList?.length > 0
                    ? (<p>{<span className='movie-details__label'>{mainActorsList.length === 1 ? `Star:` : `Stars:`}</span>}  {mainActorsList.map((credit, i) => `${credit.name} ${i < (mainActorsList.length - 1) ? ', ' : ''}`)}</p>)
                    : ''
            }
        </div>
    );
}

export default CastAndCrew;
