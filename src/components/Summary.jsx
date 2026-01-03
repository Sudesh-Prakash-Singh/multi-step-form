import { useForm } from "../contexts/FormContext";

function Summary() {
  const {
    values: { plan, isYearlyBilling, addOns: currentAddOns },
    evaluateAndFormatPrice,
    getPlanPrice,
    getAddOns,
    getTotalPrice,
    setStep,
  } = useForm();

  const formattedPlanPrice = evaluateAndFormatPrice(getPlanPrice(plan));
  const addOns = getAddOns();
  return (
    <div className="summary">
      <div className="summary__breakdown">
        <div className="summary__plan">
          <div className="summary__plan-detail">
            <div className="summary__plan-name">
              {`${plan} (${isYearlyBilling ? "Yearly" : "Monthly"})`}
            </div>
            <button
              className="btn btn-link summary__change-plan"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <div className="summary__plan-price">{formattedPlanPrice}</div>
        </div>
        <div className="summary__addons">
          {currentAddOns.map((id) => (
            <div key={id} className="summary__addon">
              <div className="summary__addon-name">{addOns[id].name}</div>
              <div className="summary__addon-price">
                +{evaluateAndFormatPrice(addOns[id].price)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="summary__total">
        <div className="summary__total-label">{`Total (per ${
          isYearlyBilling ? "year" : "month"
        })`}</div>
        <div className="summary__total-price">
          +{evaluateAndFormatPrice(getTotalPrice())}
        </div>
      </div>
    </div>
  );
}

export default Summary;
