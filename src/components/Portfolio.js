import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../img/sidebar.png";
import ecommerce from "../img/ecommerce.png";
import hoc from "../img/hoc.png";
import musicApp from "../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../Context";
import { useContext } from "react";

function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Wrapper id="Portfolio">
            {/* Heading */}
            <span style={{ color: darkMode ? "white" : "" }}>
                Recent Projects
            </span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper
                spaceBetween={80}
                slidesPerView={3.5}
                grabCursor={true}
                className="slider"
            >
                <SwiperSlide>
                    <img src={sidebar} alt="Sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="Ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="HOC" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicApp} alt="Music App" />
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
}

export default Portfolio;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;

    & > span:first-child {
        color: var(--black);
        font-size: 2rem;
        font-weight: bold;
    }

    & > span:nth-child(2) {
        color: var(--orange);
        font-size: 2.5rem;
        font-weight: bold;
    }

    & > .swiper {
        overflow: visible !important;
    }

    & > .slider {
        margin-top: 3rem;
        width: 100%;
    }

    .swiper-slide {
        width: 20rem;
    }

    img {
        width: 19rem;
        filter: drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25));
        border-radius: 19px;
    }
`;
