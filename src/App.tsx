import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="grid grid-rows-6 h-screen"> {/* Set up grid and full-screen height */}
      <Nav className="row-span-2" /> {/* Nav takes up one row */}
      <Main className="row-span-5" /> {/* Main takes up the remaining five rows */}
    </div>
  );
}

export default App;
