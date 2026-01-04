import { useForm } from "../contexts/FormContext";
import Checkbox from "./Checkbox";

function AddOn({ item, checked, onChange }) {
  const { evaluateAndFormatPrice } = useForm();
  const formattedPrice = evaluateAndFormatPrice(item.price);
  return (
    <label className="form__item addon slide-in">
      <Checkbox
        checked={checked}
        onChange={onChange}
        className="addon__checkbox"
      />
      <div className="addon__info">
        <h4 className="addon__name">{item.name}</h4>
        <p className="addon__description">{item.description}</p>
      </div>
      <div className="addon__price">+{formattedPrice}</div>
    </label>
  );
}

export default AddOn;
