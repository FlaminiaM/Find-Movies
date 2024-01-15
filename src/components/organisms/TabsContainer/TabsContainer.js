import { useState } from 'react';

import './TabsContainer.scss';
import Tab from '../../atoms/Tab/Tab';
import TabContent from '../TabContent/TabContent';

function TabsContainer({ name, apiQuery }) {
    const tabs = [
        {
            displayValue: 'movies',
            value: 'movies'
        },
        {
            displayValue: 'tv series',
            value: 'tv'
        },
    ]
    const [indexSelectedTab, setIndexSelectedTab] = useState(0);
    const [selectedTab, setSelectedTab] = useState('movies');

    console.log("selected tab", selectedTab)

    const handleTabClick = (e) => {
        const i = e.target.getAttribute("tab-index");
        const value = e.target.getAttribute('tab-value');
        console.log('tab value is', value)
        setIndexSelectedTab(parseInt(i));
        setSelectedTab(value);
    }

    return (
        <div className='tabs-container'>
            <div className='tabs'>
                {tabs.map((tab, i) => <Tab key={i} tabIndex={i} {...tab} selected={i === indexSelectedTab} handleTabClick={handleTabClick} value={tab.value} displayValue={tab.displayValue} />)}
            </div>
            <TabContent type={selectedTab} name={`${name}-${selectedTab}`} apiQuery={apiQuery} />
        </div>
    )
}

export default TabsContainer;
