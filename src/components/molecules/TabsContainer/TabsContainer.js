import { useState } from 'react';

import './TabsContainer.scss';
import Tab from '../../atoms/Tab/Tab';

function TabsContainer({ }) {
    const tabs = ['Movies', 'Series']
    const [indexSelectedTab, setIndexSelectedTab] = useState(0);

    const handleTabClick = (e) => {
        const i = e.target.getAttribute("tab-index");
        const value = e.target.getAttribute('tab-value');
        setIndexSelectedTab(parseInt(i));
    }

    return (
        <div className='tabs-container'>
            {tabs.map((tab, i) => <Tab key={i} tabIndex={i} {...tab} selected={i === indexSelectedTab} handleTabClick={handleTabClick} displayValue={tab} />)}
        </div>
    )
}

export default TabsContainer;
