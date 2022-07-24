import styled from "styled-components";
import wave from "../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
    return (
        <Wrapper>
            <img src={wave} alt="Wave" />
            <Content>
                <span>freelancework626@gmail.com</span>
                <Icons>
                    <Instagram color="white" size="3rem" />
                    <Facebook color="white" size="3rem" />
                    <Github color="white" size="3rem" />
                </Icons>
            </Content>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: -0.5rem -3.5rem;
    position: relative;
    margin-top: -7rem;

    img {
        width: 100%;
    }
`;

const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;
    gap: 4rem;
    color: white;
`;

const Icons = styled.div`
    display: flex;
    gap: 2rem;
`;
