import { useForm } from "../contexts/FormContext";

function PlanCard({ name, plan }) {
  const {
    values: { isYearlyBilling, freeMonths, plan: currentPlan },
    setValue,
    getPlanPrice,
    evaluateAndFormatPrice,
  } = useForm();

  const selected = currentPlan === plan;
  const icon = `icon--${plan}`;
  const price = evaluateAndFormatPrice(getPlanPrice(plan));

  return (
    <div
      className={`card ${selected ? "card--active" : ""}`}
      onClick={() => setValue("plan", plan)}
    >
      <div className={`icon ${icon} card__icon`}></div>
      <div
        className={`card__content ${
          isYearlyBilling && freeMonths ? "card__free--visible" : ""
        }`}
      >
        <h4>{name}</h4>
        <p className="card__price">{price}</p>
        <p className="card__free">{freeMonths} months free</p>
      </div>
    </div>
  );
}

export default PlanCard;
