import CrudApi from "./components/CrudApi";
import Mypage from "./components/Mypage";
import MypageContext from "./components/MypageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MypageContext />
      <hr />
      <Mypage />
    </div>
  );
}

export default App;
