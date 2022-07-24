import styled from "styled-components";
import heartEmoji from "../img/heartemoji.png";
import glasses from "../img/glasses.png";
import humble from "../img/humble.png";
import Card from "./Card";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
    const transition = {
        duration: 1,
        type: "spring",
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Wrapper id="Services">
            {/* Left Side */}
            <Awesome>
                <span style={{ color: darkMode ? "white" : "" }}>
                    My Awesome
                </span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Facilis, rerum porro? Autem tempora voluptatum magnam!
                </span>
                <Button>Download CV</Button>
                <Blur></Blur>
            </Awesome>

            {/* Right Side */}
            <Cards>
                <First
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={heartEmoji}
                        heading="Design"
                        details="Figma, Sketch, Adobe XD, Adobe Photoshop"
                    />
                </First>

                <Second
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={glasses}
                        heading="Developer"
                        details="HTML, CSS, JS, React JS, Next JS, Tailwind CSS"
                    />
                </Second>

                <Third
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={humble}
                        heading="UI/UX"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    />
                </Third>
                <NewBlur></NewBlur>
            </Cards>
        </Wrapper>
    );
}

export default Services;

const Wrapper = styled.div`
    padding: 0 3rem 0 3rem;
    display: flex;
    height: 90vh;
    margin-bottom: 8rem;
    margin-top: 9rem;
    margin-bottom: 13rem;

    @media screen and (max-width: 480px) {
        margin-top: 0;
        flex-direction: column;
        gap: 5rem;
        height: 66rem;
        padding: 0;
    }
`;

const Awesome = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & > :first-child,
    & > :nth-child(2) {
        color: var(--black);
        font-size: 2.5rem;
        font-weight: bold;
    }

    & > :nth-child(2) {
        color: var(--orange);
    }

    & > :nth-child(3) {
        color: var(--gray);
        font-size: 14px;
        margin-top: 1rem;
    }
`;

const Button = styled.button`
    width: 8rem;
    height: 2rem;
    margin-top: 1rem;
`;

const Cards = styled.div`
    position: relative;
    margin-left: 10rem;

    & > * {
        position: absolute;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: 17rem;
        margin-left: 0;

        & > * {
            position: static;
        }
    }
`;

const First = styled(motion.div)`
    left: 14rem;
`;

const Second = styled(motion.div)`
    top: 8rem;
    left: -4rem;
`;

const Third = styled(motion.div)`
    top: 19rem;
    left: 12rem;
`;

const NewBlur = styled.div`
    background: var(--purple);
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    background: #edd0ff;
    filter: blur(72px);
    z-index: -9;
    left: 15rem;
`;

const Blur = styled(NewBlur)`
    background: #abf1ff94;
    top: 13rem;
    width: 21rem;
    height: 11rem;
    left: -18rem;
`;
