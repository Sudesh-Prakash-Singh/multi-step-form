import { useForm } from "../contexts/FormContext";

function ButtonControl() {
  const { step, prev, next, submit } = useForm();

  if (step > 4) return null;

  return (
    <div className="form__navigation">
      {step > 1 && (
        <button className="btn btn-link" onClick={prev}>
          Go Back
        </button>
      )}
      {step < 4 && (
        <button className="btn btn-primary" onClick={next}>
          Next Step
        </button>
      )}
      {step === 4 && (
        <button className="btn btn-secondary" onClick={submit}>
          Confirm
        </button>
      )}
    </div>
  );
}

export default ButtonControl;
