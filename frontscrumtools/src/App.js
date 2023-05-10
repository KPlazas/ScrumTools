import { BrowserRouter } from "react-router-dom";
import RoutesG from "./Routes/RoutesG";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesG/>
      </div>
    </BrowserRouter>
  );
}

export default App;
