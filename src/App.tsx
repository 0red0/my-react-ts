import "./App.css";
import Todos from "./components/Todos";

function App() {
   return (
      <div>
         <Todos items={["learn react", "learn ts"]} />
      </div>
   );
}

export default App;
