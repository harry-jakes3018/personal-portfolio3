import styled from "styled-components";
import { themeContext } from "../Context";
import { useContext } from "react";

function FloatingDiv({ image, text1, text2 }) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Float>
            <img src={image} alt="" />
            <span style={{ color: darkMode ? "black" : "" }}>
                {text1}
                <br /> {text2}
            </span>
        </Float>
    );
}

export default FloatingDiv;

const Float = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    box-shadow: var(--boxShadow);
    border-radius: 17px;
    align-items: center;
    padding: 0 28px 0 0;
    height: 4.5rem;

    & > img {
        transform: scale(0.4);
    }

    & > span {
        font-family: sans-serif;
        font-size: 16px;
    }
`;
