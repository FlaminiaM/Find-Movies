import './UpcomingSection.scss';

import { useGetUpcomingMoviesQuery } from '../../../api/api';

import TabContent from '../TabContent/TabContent';

function UpcomingSection() {
    return (
        <div className="upcoming-section">
            <h1>Upcoming</h1>
            <TabContent name="upcoming" apiQuery={useGetUpcomingMoviesQuery} />
        </div>
    );
}
export default UpcomingSection;
