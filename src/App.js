// import './App.css';

import { useEffect, useState } from "react";
import TheData from "./compo/TheData/TheData";

function App() {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('fakeDB.json')
      .then(res => res.json())
      .then(data => setName(data))
  }, [])

  return (
    <div className="App">
      {
        name.map(nm => <TheData key={nm.id} data={nm}></TheData>)
      }
    </div>
  );
}

export default App;
