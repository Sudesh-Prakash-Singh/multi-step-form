import SideBar from "./components/SideBar";
import Form from "./components/Form";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <div className="page">
      <FormProvider>
        <div className="container">
          <SideBar />
          <Form />
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
