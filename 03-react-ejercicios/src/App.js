import ContactForm from "./Components/ContactForm";
import CrudApi from "./Components/CrudApi";
import CrudApp from "./Components/CrudApp";
import Modals from "./Components/Modals";
import SelectsAnidados from "./Components/SelectsAnidados";
import SongSearch from "./Components/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
