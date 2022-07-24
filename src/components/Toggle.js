import styled from "styled-components";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../Context";
import { useContext } from "react";

function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({ type: "toggle" });
    };

    return (
        <Wrapper onClick={handleClick}>
            <Moon />
            <Sun />
            <Button
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></Button>
        </Wrapper>
    );
}

export default Toggle;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px solid var(--orange);
    border-radius: 1rem;
    position: relative;
    padding: 2px;
    cursor: pointer;

    & > * {
        width: 1rem;
        height: 1rem;
        color: var(--orange);
    }
`;

const Button = styled.div`
    border-radius: 50%;
    background: var(--orange);
    position: absolute;
`;
