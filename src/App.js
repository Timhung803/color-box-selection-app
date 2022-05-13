import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <main className="App">
      <div>
        <div className="box colorBox" style={{ backgroundColor: `${color}` }}>
          {color.length > 0 ? color : "Empty Value"}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="addColor"></label>
          <input
            autoFocus
            className="box addColor"
            id="addColor"
            type="text"
            placeholder="Add colour name"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </form>
      </div>
    </main>
  );
}

export default App;
