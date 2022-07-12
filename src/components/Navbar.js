import styled from "styled-components";

function Navbar() {
    return (
        <Wrapper>
            <Left>
                <Name>Jitendra</Name>
                <span>Toggle</span>
            </Left>
            <Right>
                <List>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </List>
                <Button>Contact Us</Button>
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
    /* flex: 1; */
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

        & > li:hover {
            cursor: pointer;
            color: var(--orange);
        }
    }
`;

const Button = styled.button`
    flex: 2;
    font-size: 20px;
    border: 1px solid var(--orange);
`;
