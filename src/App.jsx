import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import beastListArr from "./Components/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery beastList={beastListArr} />
      <Footer />
    </div>
  );
}

export default App;
