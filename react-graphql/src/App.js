import React from "react";
import Albums from "./components/Albums";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto py-6">
        <h2 className="text-xl text-blue-800 font-bold pb-4">Albums</h2>
        <Albums></Albums>
      </div>
    </div>
  );
}

export default App;
