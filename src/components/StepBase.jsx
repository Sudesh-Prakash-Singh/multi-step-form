import StepTitle from "./StepTitle";

function StepBase({ title, description, children }) {
  return (
    <div className="form__content">
      <StepTitle title={title} description={description} />
      <div className="form__items">{children}</div>
    </div>
  );
}

export default StepBase;
