import { useForm } from "../contexts/FormContext";
import AddOn from "./AddOn";
import StepBase from "./StepBase";
import StepTitle from "./StepTitle";

function Step3() {
  const {
    values: { addOns: currentAddOns },
    getAddOns,
    addAddOn,
    removeAddOn,
  } = useForm();
  const addOns = getAddOns();
  return (
    <StepBase
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      {addOns.map((addOn, i) => (
        <AddOn
          key={i}
          item={addOn}
          checked={currentAddOns.includes(i)}
          onChange={(isChecked) => {
            isChecked ? addAddOn(i) : removeAddOn(i);
          }}
        />
      ))}
    </StepBase>
  );
}

export default Step3;
