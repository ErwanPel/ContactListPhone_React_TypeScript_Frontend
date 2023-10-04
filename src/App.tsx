import Contacts from "./components/Contacts";
import PhoneBookProvider from "./context/phoneBookContext";

function App(): JSX.Element {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <PhoneBookProvider>
        <Contacts />
      </PhoneBookProvider>
    </div>
  );
}

export default App;
