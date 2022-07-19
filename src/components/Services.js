import styled from "styled-components";
import heartEmoji from "../img/heartemoji.png";
import glasses from "../img/glasses.png";
import humble from "../img/humble.png";
import Card from "./Card";

function Services() {
    return (
        <Wrapper>
            {/* Left Side */}
            <Awesome>
                <span>My Awesome</span>
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
                <First>
                    <Card
                        emoji={heartEmoji}
                        heading="Design"
                        details="Figma, Sketch, Adobe XD, Adobe Photoshop"
                    />
                </First>

                <Second>
                    <Card
                        emoji={glasses}
                        heading="Developer"
                        details="HTML, CSS, JS, React JS, Next JS, Tailwind CSS"
                    />
                </Second>

                <Third>
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
`;

const First = styled.div`
    left: 14rem;
`;

const Second = styled.div`
    top: 8rem;
    left: -4rem;
`;

const Third = styled.div`
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
