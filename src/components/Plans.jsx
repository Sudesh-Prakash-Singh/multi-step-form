import PlanCard from "./PlanCard";

function Plans() {
  return (
    <div className="form__item cards">
      <PlanCard name="Arcade" plan="arcade" />
      <PlanCard name="Advanced" plan="advanced" />
      <PlanCard name="Pro" plan="pro" />
    </div>
  );
}

export default Plans;
