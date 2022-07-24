import { useContext } from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";
import { themeContext } from "./Context";

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            className="App"
            style={{
                background: darkMode ? "black" : "white",
                color: darkMode ? "white" : "black",
            }}
        >
            <Navbar />
            <Intro />
            <Services />
            <Experiences />
            <Works />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
