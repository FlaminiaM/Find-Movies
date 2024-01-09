import './InputGroup.scss';

function InputGroup({ input, label }) {
    return (
        <div className='input-group'>
            {label ? <div className='input-group__label-container'><label>{label}</label></div> : ''}
            {input}
        </div>
    )
}

export default InputGroup;