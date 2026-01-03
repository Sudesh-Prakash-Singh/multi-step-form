import { useForm } from "../contexts/FormContext";
import StepTitle from "./StepTitle";
import Input from "./Input";
import StepBase from "./StepBase";

function Step1() {
  const {
    values: { name, email, phone },
    setValue,
    errors,
  } = useForm();

  return (
    <StepBase
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <Input
        id="name"
        label="Name"
        type="text"
        value={name}
        onChange={(val) => setValue("name", val)}
        error={errors.name}
      />

      <Input
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(val) => setValue("email", val)}
        error={errors.email}
        placeholder="e.g. user@mail.com"
      />

      <Input
        id="tel"
        label="Phone Number"
        type="tel"
        value={phone}
        onChange={(val) => setValue("phone", val)}
        error={errors.phone}
        placeholder="e.g. +1 234 567 890"
      />
    </StepBase>
  );
}

export default Step1;
