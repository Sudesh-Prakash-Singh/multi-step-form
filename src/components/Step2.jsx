import PlanDurationToggle from "./PlanDurationToggle";
import Plans from "./Plans";
import StepBase from "./StepBase";
import StepTitle from "./StepTitle";

function Step2() {
  return (
    <StepBase
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <Plans />
      <PlanDurationToggle />
    </StepBase>
  );
}

export default Step2;
