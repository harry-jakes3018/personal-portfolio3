import styled from "styled-components";

function Card({ emoji, heading, details }) {
    return (
        <Wrapper>
            <img src={emoji} alt="Emojies" />
            <span>{heading}</span>
            <span>{details}</span>
            <Button>Learn More</Button>
        </Wrapper>
    );
}

export default Card;

const Wrapper = styled.div`
    width: 10rem;
    height: 13rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.26);
    border: 7px solid var(--orangeCard);
    border-radius: 20px;
    padding: 0px 23px 2rem 26px;

    & > img {
        transform: scale(0.6);
        margin-bottom: -2rem;
    }

    & > :nth-of-type(2) {
        color: var(--gray);
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        width: auto;
    }
`;

const Button = styled.button`
    text-transform: uppercase;
    background: whitesmoke;
    box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: none;
    color: #5290fd;
    padding: 10px;
    font-size: 16px;
`;
