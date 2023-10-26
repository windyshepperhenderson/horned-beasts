import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import beastListArr from "./Components/Data";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [showSelectedBeast, setShowSelectedBeast] = useState(false);
  const [selectedHorns, setSelectedHorns] = useState("All");
  const [titleInput, setTitleInput] = useState("");
  const [filterActivated, setFilterActivated] = useState(false);

  function handleTitleInputChange(event) {
    const input = event.target.value;
    setTitleInput(input);

    // Activate filtering when at least 3 characters are entered
    if (input.length >= 3) {
      setFilterActivated(true);
    } else {
      setFilterActivated(false);
    }
  }

  function handleShowSelectedBeast() {
    // !showSelectedBeast is the opposite of the current value of showSelectedBeast
    // meaning it sets it to true when its false, and false when its true
    setShowSelectedBeast(!showSelectedBeast);
  }

  function handleHornsFilter(event) {
    setSelectedHorns(event.target.value);
  }

  const filteredBeasts =
    selectedHorns === "All"
      ? beastListArr
      : beastListArr.filter((beast) => beast.horns == selectedHorns);

  const filteredBeastsWithTitle = filterActivated
    ? filteredBeasts.filter((beast) =>
        beast.title.toLowerCase().includes(titleInput.toLowerCase())
      )
    : filteredBeasts;

  return (
    <div className="App">
      <div className="dropDownFilter">
        <label htmlFor="hornFilter">Filter Beasties by Horns </label>
        <select
          name=""
          id="hornFilter"
          value={selectedHorns}
          onChange={handleHornsFilter}
        >
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="titleInput">
        <label htmlFor="titleInput">Search for a Beastie: </label>
        <input
          type="text"
          id="titleInput"
          value={titleInput}
          onChange={handleTitleInputChange}
        />
      </div>

      {/* We are conditionally rendering Modal, based on whether showModal is true or false */}
      {showSelectedBeast && (
        <SelectedBeast handleShowSelectedBeast={handleShowSelectedBeast} />
      )}

      <Header />
      <Gallery beastList={filteredBeastsWithTitle} />
      <Footer />
    </div>
  );
}

export default App;
