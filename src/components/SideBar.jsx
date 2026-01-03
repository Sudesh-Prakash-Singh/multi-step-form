import { useForm } from "../contexts/FormContext";

const steps = [
  { id: 1, label: "Your info" },
  { id: 2, label: "Select plan" },
  { id: 3, label: "Add-ons" },
  { id: 4, label: "Summary" },
];

function SideBar() {
  const { step } = useForm();
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {steps.map((st) => (
          <li
            key={st.id}
            className={`sidebar__item ${
              st.id === step ? "sidebar__item--active" : ""
            }`}
          >
            <div className="sidebar__number">{st.id}</div>
            <div>
              <h4>Step {st.id}</h4>
              <p>{st.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
