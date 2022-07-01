import "./customInput.css";

function CustomInput({ id, type, value, onChange, inputLabel }) {
  return (
    <div className="input-container">
      <input id={id} type={type} value={value} onChange={onChange}></input>
      <label htmlFor={id} className={value && "filled"}>
        {inputLabel}
      </label>
    </div>
  );
}

export default CustomInput;
