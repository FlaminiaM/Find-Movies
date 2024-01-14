import TopRatedSection from '../../organisms/TopRatedSection/TopRatedSection';
import UpcomingSection from '../../organisms/UpcomingSection/UpcomingSection';

import './Homepage.scss';

function Homepage() {
    return (
        <div className='homepage'>
            <TopRatedSection />
            <UpcomingSection />
        </div>
    );
}

export default Homepage;
