import ButtonControl from "./ButtonControl";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ThankYou from "./ThankYou";
import { useForm } from "../contexts/FormContext";

function Form() {
  const { step } = useForm();

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <ThankYou />}
      <ButtonControl />
    </>
  );
}

export default Form;
