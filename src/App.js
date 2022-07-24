import Experiences from "./components/Experiences";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Services />
            <Experiences />
            <Works />
            <Portfolio />
        </div>
    );
}

export default App;
