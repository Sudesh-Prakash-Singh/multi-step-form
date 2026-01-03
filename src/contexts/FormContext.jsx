import { createContext, useContext, useState } from "react";
import _ from "lodash";

const FormContext = createContext();

const monthlyPricing = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const addOns = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  isYearlyBilling: false,
  freeMonths: 2,
  addOns: [],
};

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  function next() {
    const stepErrors = validate();
    if (_.isEmpty(stepErrors)) {
      setStep((prev) => prev + 1);
    }
  }

  function prev() {
    setStep((prev) => prev - 1);
  }

  function submit() {
    console.log("submitted");
    setStep(5);
  }

  function validate() {
    const stepErrors = {};
    if (step === 1) {
      if (!data.name) {
        stepErrors.name = "Name cannot be empty";
      }

      if (!data.email) {
        stepErrors.email = "Email cannot be empty";
      }

      if (!data.phone) {
        stepErrors.phone = "Phone cannot be empty";
      }
    }

    setErrors(stepErrors);
    return stepErrors;
  }

  function getPlanPrice(plan) {
    return monthlyPricing[plan];
  }

  function getTotalPrice() {
    let total = monthlyPricing[data.plan];
    data.addOns.forEach((index) => (total += addOns[index]?.price ?? 0));
    return total;
  }

  function getAddOns() {
    return addOns;
  }

  function addAddOn(index) {
    if (index >= 0 && index < addOns.length) {
      setData((prev) => {
        return { ...prev, addOns: [...prev.addOns, index] };
      });
    }
  }

  function removeAddOn(index) {
    if (index >= 0 && index < addOns.length) {
      setData((prev) => {
        return { ...prev, addOns: prev.addOns.filter((val) => val !== index) };
      });
    }
  }

  function evaluateAndFormatPrice(monthlyPrice) {
    if (data.isYearlyBilling)
      return `$${monthlyPrice * (12 - data.freeMonths)}/yr`;
    else return `$${monthlyPrice}/mo`;
  }

  function setValue(key, value) {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  }

  return (
    <FormContext.Provider
      value={{
        step,
        prev,
        next,
        submit,
        values: data,
        setValue,
        errors,
        validate,
        getPlanPrice,
        evaluateAndFormatPrice,
        getAddOns,
        addAddOn,
        removeAddOn,
        getTotalPrice,
        setStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) {
    console.error("form context called outside its scope");
    return;
  }
  return ctx;
}
