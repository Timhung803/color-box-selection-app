import { useState } from "react";
import AddColor from "./AddColor";
import "./App.css";
import ColorBox from "./ColorBox";

function App() {
  const [color, setColor] = useState("");

  return (
    <main className="App">
      <div>
        <ColorBox color={color} />
        <AddColor color={color} setColor={setColor} />
      </div>
    </main>
  );
}

export default App;
