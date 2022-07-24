import styled from "styled-components";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <Wrapper>
            <Left>
                <Name>Jitendra</Name>
                <Toggle />
            </Left>
            <Right>
                <List>
                    <ul>
                        <Link
                            spy={true}
                            to="Navbar"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to="Services" es smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to="Experiences" smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to="Testimonials" smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </List>
                <Button>Contact</Button>
            </Right>
        </Wrapper>
    );
}

export default Navbar;

const Wrapper = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
    gap: 2rem;
`;

const Name = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-weight: 400;
`;

const List = styled.div`
    flex: 1;

    & > ul {
        display: flex;
        gap: 2rem;
        margin-right: 4rem;
        list-style-type: none;
        cursor: pointer;

        & > li:hover {
            cursor: pointer;
            color: var(--orange);
        }
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

const Button = styled.button`
    flex: 2;
    border: 1px solid var(--orange);
`;
