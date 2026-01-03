function Checkbox({ checked, onChange, className }) {
  return (
    <div className={`checkbox ${className || ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkbox__box">
        <svg viewBox="0 0 24 24" className="checkbox__checkmark">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </div>
  );
}

export default Checkbox;
