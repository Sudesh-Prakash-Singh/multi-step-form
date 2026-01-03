import { useForm } from "../contexts/FormContext";

function PlanDurationToggle() {
  const {
    values: { isYearlyBilling },
    setValue,
  } = useForm();

  return (
    <div className="form__item">
      <div className="form__toggle">
        <span
          className={`form__toggle-label ${
            !isYearlyBilling ? "form__toggle-label--active" : ""
          }`}
        >
          Monthly
        </span>
        <label className="form__toggle-switch">
          <input
            type="checkbox"
            checked={isYearlyBilling}
            onChange={(e) => setValue("isYearlyBilling", e.target.checked)}
          />
          <span className="form__toggle-slider"></span>
        </label>
        <span
          className={`form__toggle-label ${
            isYearlyBilling ? "form__toggle-label--active" : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default PlanDurationToggle;
