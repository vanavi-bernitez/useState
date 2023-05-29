import "./App.css";
import { IncrementDecrement } from "./components/IncreDecrement";
import { FlowerNumber } from "./components/FlowerSelector";
import { CartItems } from "./components/CartItems";
import { HiddenMessage } from "./components/HiddenMessage";
import { InputValue } from "./components/SawInputValue";
import { MenuSelector } from "./components/MenuSelector";
import { PhoneNumberForm } from "./components/PhoneInput";
import { Form } from "./components/Form";
import { CheckButton } from "./components/CheckButton";
import { CheckImage } from "./components/ChangeImage";

function App() {
  return (
    <div className="App">
      <IncrementDecrement />
      <FlowerNumber />
      <CartItems />
      <HiddenMessage />
      <InputValue />
      <MenuSelector />
      <PhoneNumberForm />
      <Form />
      <CheckButton />
      <CheckImage />
    </div>
  );
}

export default App;
