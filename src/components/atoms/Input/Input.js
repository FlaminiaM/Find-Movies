import './Input.scss';


function Input({ inputType, name, placeholder, icon, inputValue, onChangeHandler }) {
    return (
        <input name={name} className={icon.length > 0 ? `input input--with-icon` : `input`} style={icon ? { backgroundImage: `url(${icon})` } : {}} type={inputType} placeholder={placeholder} onChange={onChangeHandler} value={inputValue} />
    )
}

export default Input;