import './TopRatedSection.scss';

import { useGetTopRatedMoviesQuery, useGetTopRatedTvQuery } from '../../../api/api';

import TabsContainer from '../TabsContainer/TabsContainer';

function TopRatedSection() {
    return (
        <div className="top-rated-section">
            <h1>Top Rated</h1>
            <TabsContainer movieApiQuery={useGetTopRatedMoviesQuery} tvApiQuery={useGetTopRatedTvQuery} />
        </div>
    );
}
export default TopRatedSection;
