import './Tab.scss';

function Tab({ displayValue, selected, value, tabIndex, handleTabClick }) {
    return (
        <span tab-index={tabIndex} tab-value={value} className={`tab ${selected ? 'tab--selected' : ''}`} onClick={handleTabClick}>{displayValue.toUpperCase()}</span>
    )
}

export default Tab;