import './Tab.scss';

function Tab({ displayValue, selected, value, tabIndex, handleTabClick }) {
    return (
        <div className={`tab ${selected ? 'tab--selected' : ''}`}>
            <span tab-index={tabIndex} tab-value={value} onClick={handleTabClick}>{displayValue.toUpperCase()}</span>
            <span className='tab__selected-border'></span>
        </div>
    )
}

export default Tab;