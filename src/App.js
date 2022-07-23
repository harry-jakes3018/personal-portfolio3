import Experiences from "./components/Experiences";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
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
        </div>
    );
}

export default App;
