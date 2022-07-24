import styled from "styled-components";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";
import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Wrapper>
            <Left>
                <Name>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Hi! I Am
                    </span>
                    <span>Jitendra Garg</span>
                    <span>
                        Front-End Developer with high level of experience in web
                        designing and development, producing the quality work.
                    </span>
                </Name>
                <Button>Hire Me</Button>
                <Icons>
                    <img src={github} alt="GitHub" />
                    <img src={linkedin} alt="LinkedIn" />
                    <img src={instagram} alt="Instagram" />
                </Icons>
            </Left>
            <Right>
                <img src={vector1} alt="Vector 1" />
                <img src={vector2} alt="Vector 2" />
                <img src={boy} alt="Boy" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt="Glass"
                />
                <Top
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                >
                    <FloatingDiv image={crown} text1="Web" text2="Developer" />
                </Top>
                <Bottom
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "2.2rem" }}
                    transition={transition}
                >
                    <FloatingDiv image={thumbup} text1="UI" text2="Designer" />
                </Bottom>

                {/* Blur Divs */}
                <BlurLeft></BlurLeft>
                <BlurRight></BlurRight>
            </Right>
        </Wrapper>
    );
}

export default Intro;

const Wrapper = styled.div`
    display: flex;
    height: 77vh;
    margin-top: 6rem;
`;

const Left = styled.div`
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    gap: 2rem;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;

    & > :first-child {
        color: var(--black);
        font-weight: bold;
        font-size: 3rem;
    }

    & > :nth-child(2) {
        color: var(--orange);
        font-weight: bold;
        font-size: 3rem;
    }

    & > :last-child {
        font-weight: 100;
        font-size: 16px;
        color: var(--gray);
        margin-top: 10px;
        padding-right: 5rem;
    }
`;

const Button = styled.button`
    width: 6rem;
    height: 2rem;
`;

const Icons = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 0rem;

    & > img {
        transform: scale(0.5);

        &:hover {
            cursor: pointer;
        }
    }
`;

const Right = styled.div`
    flex: 1;
    position: relative;

    & > * {
        position: absolute;
        z-index: 1;
    }

    & > :first-child {
        transform: scale(0.9);
        left: -15%;
        top: -9%;
    }

    & > :nth-child(2) {
        top: -4.6rem;
        transform: scale(0.7);
        left: -3rem;
    }

    & > :nth-child(3) {
        transform: scale(1.4);
        left: 28%;
    }

    & > :nth-child(4) {
        transform: scale(0.7);
        top: -19%;
        left: -24%;
        border-radius: 50%;
        padding: 0;
    }
`;

const Top = styled(motion.div)`
    top: -4%;
    left: 68%;
`;

const Bottom = styled(motion.div)`
    top: 18.2rem;
    left: 7%;
`;

const BlurLeft = styled.div`
    /* background-color: rgb(238, 210, 255); */
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    background: #edd0ff;
    filter: blur(72px);
    z-index: -9;
    top: -18%;
    left: 56%;
`;

const BlurRight = styled(BlurLeft)`
    background: #c1f5ff;
    top: 15rem;
    width: 21rem;
    height: 11rem;
    left: -9rem;
`;
