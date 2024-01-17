import './TopRatedSection.scss';

import { useGetTopRatedQuery } from '../../../api/api';

import TabsContainer from '../TabsContainer/TabsContainer';

function TopRatedSection() {
    return (
        <div className="top-rated-section">
            <h1>Top Rated</h1>
            <TabsContainer name='top-rated' apiQuery={useGetTopRatedQuery}/>
        </div>
    );
}
export default TopRatedSection;
