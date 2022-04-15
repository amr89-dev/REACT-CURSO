import Mypage from "./components/Mypage";
import MypageContext from "./components/MypageContext";

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
      <MypageContext />
      <hr />
      <Mypage />
    </div>
  );
}

export default App;
