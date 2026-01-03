function Input({
  id,
  label,
  type = "text",
  value = "",
  onChange,
  error,
  disabled = false,
  placeholder,
}) {
  return (
    <div className="form__item">
      <div className="form__label-row">
        <label htmlFor={id} className="form__label">
          {label}
        </label>
        {error && <span className="form__error">{error}</span>}
      </div>
      <input
        id={id}
        type={type}
        className={`form__input ${error ? "form__input--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
