import styled from "styled-components";

function Experiences() {
    return (
        <Wrapper>
            <Achievement>
                <Circle>8+</Circle>
                <span>years</span>
                <span>Experience</span>
            </Achievement>
            <Achievement>
                <Circle>20+</Circle>
                <span>completed</span>
                <span>Projects</span>
            </Achievement>
            <Achievement>
                <Circle>5+</Circle>
                <span>industry</span>
                <span>Work</span>
            </Achievement>
        </Wrapper>
    );
}

export default Experiences;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 30vh;
    margin-bottom: 8rem;
`;

const Achievement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span:nth-of-type(2) {
        color: var(--orange);
    }
`;

const Circle = styled.div`
    width: 4rem;
    height: 4rem;
    background: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: black;

    &::before {
        border-radius: 50%;
        content: "";
        background-image: linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%);
        top: -8px;
        left: -8px;
        bottom: -8px;
        right: -8px;
        position: absolute;
        z-index: -1;
        box-shadow: var(--boxShadow);
    }
`;
