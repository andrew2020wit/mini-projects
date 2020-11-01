import { Clock } from "./1/clock";
import { HelloWorld } from "./1/hello-world";
import "./App.css";
import Clicker from "./clicker/clicker";

function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <hr></hr>
      <Clock></Clock>
      <hr></hr>
      <Clicker />
      <hr></hr>
      <ul>
        List:
        {[1, 2, 3, 4, 5].map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
