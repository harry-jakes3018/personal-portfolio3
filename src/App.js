import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Services />
        </div>
    );
}

export default App;
