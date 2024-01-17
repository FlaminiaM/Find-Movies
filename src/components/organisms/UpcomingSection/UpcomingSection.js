import './UpcomingSection.scss';

import { useGetUpcomingMoviesQuery } from '../../../api/api';

import TabContent from '../TabContent/TabContent';

function UpcomingSection() {
    return (
        <div className="upcoming-section">
            <h1>Upcoming Movies</h1>
            <TabContent type='movies' name="upcoming" apiQuery={useGetUpcomingMoviesQuery} />
        </div>
    );
}
export default UpcomingSection;
