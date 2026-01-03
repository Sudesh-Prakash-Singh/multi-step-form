function StepTitle({ title, description }) {
  return (
    <div className="form__info">
      <h2 className="form__title">{title}</h2>
      <p className="form__description">{description}</p>
    </div>
  );
}

export default StepTitle;
