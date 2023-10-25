import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import beastListArr from "./Components/Data";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [showSelectedBeast, setShowSelectedBeast] = useState(false);

  function handleShowSelectedBeast() {
    // !showSelectedBeast is the opposite of the current value of showSelectedBeast
    // meaning it sets it to true when its false, and false when its true
    setShowSelectedBeast(!showSelectedBeast);
  }

  return (
    <div className="App">
      <button onClick={handleShowSelectedBeast}>Enlarge</button>
      {/* We are conditionally rendering Modal, based on whether showModal is true or false */}
      {showSelectedBeast && (
        <SelectedBeast handleShowSelectedBeast={handleShowSelectedBeast} />
      )}

      <Header />
      <Gallery beastList={beastListArr} />
      <Footer />
    </div>
  );
}

export default App;
