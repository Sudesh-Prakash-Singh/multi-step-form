import StepBase from "./StepBase";
import Summary from "./Summary";

function Step4() {
  return (
    <StepBase
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <Summary />
    </StepBase>
  );
}

export default Step4;
