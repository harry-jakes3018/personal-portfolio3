import styled from "styled-components";
import upwork from "../img/Upwork.png";
import fiverr from "../img/fiverr.png";
import amazon from "../img/amazon.png";
import shopify from "../img/Shopify.png";
import facebook from "../img/Facebook.png";
import { themeContext } from "../Context";
import { useContext } from "react";

function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Wrapper>
            {/* Left Side */}
            <Awesome>
                <span style={{ color: darkMode ? "white" : "" }}>
                    Works for All these
                </span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Facilis, rerum porro? Autem tempora voluptatum magnam!
                    <br />
                    Facilis, rerum porro? Autem tempora voluptatum magnam!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <Button>Download CV</Button>
                <Blur></Blur>
            </Awesome>

            {/* Right Side */}
            <Right>
                <MainCircle>
                    <SecondaryCircle>
                        <img src={upwork} alt="Upwork" />
                    </SecondaryCircle>
                    <SecondaryCircle>
                        <img src={fiverr} alt="Upwork" />
                    </SecondaryCircle>
                    <SecondaryCircle>
                        <img src={amazon} alt="Upwork" />
                    </SecondaryCircle>
                    <SecondaryCircle>
                        <img src={shopify} alt="Upwork" />
                    </SecondaryCircle>
                    <SecondaryCircle>
                        <img src={facebook} alt="Upwork" />
                    </SecondaryCircle>
                </MainCircle>

                {/* Background Circles */}
                <BackCircle className="blueCircle"></BackCircle>
                <BackCircle className="yellowCircle"></BackCircle>
            </Right>
        </Wrapper>
    );
}

export default Works;

const Wrapper = styled.div`
    padding: 0 3rem 0 3rem;
    display: flex;
    height: 90vh;
    margin-top: 4rem;
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

const Blur = styled.div`
    background: var(--purple);
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    background: #edd0ff;
    filter: blur(72px);
    z-index: -9;
    left: 15rem;

    background: #abf1ff94;
    top: 13rem;
    width: 21rem;
    height: 11rem;
    left: -18rem;
`;

const Right = styled.div`
    position: relative;
`;

const MainCircle = styled.div`
    left: 9rem;
    position: relative;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    box-shadow: var(--smboxShadow);
    top: 2rem;
    background: white;

    & > * {
        position: absolute;
    }
`;

const SecondaryCircle = styled.div`
    width: 6rem;
    height: 6rem;
    position: absolute;
    border-radius: 100%;
    border: 5px solid #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: none; */
    box-shadow: var(--smboxShadow);
    background: white;

    & > img {
        transform: scale(0.6);
    }

    :first-child {
        top: -3rem;
        left: 6rem;
    }

    :nth-child(2) {
        left: -3rem;
        top: 5rem;
    }

    :nth-child(3) {
        left: 6rem;
        top: 5rem;
    }

    :nth-child(4) {
        left: 15rem;
        top: 5rem;
    }

    :last-child {
        left: 6rem;
        top: 13rem;
    }
`;

const BackCircle = styled.div`
    position: absolute;
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    z-index: -1;

    &.blueCircle {
        background: #1949b8;
        left: 18rem;
        top: 0rem;
    }

    &.yellowCircle {
        background: #f5c32c;
        left: 18rem;
        top: 8rem;
    }
`;
