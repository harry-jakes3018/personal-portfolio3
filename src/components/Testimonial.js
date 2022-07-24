import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../img/profile1.jpg";
import profilePic2 from "../img/profile2.jpg";
import profilePic3 from "../img/profile3.jpg";
import profilePic4 from "../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { themeContext } from "../Context";

function Testimonial() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium obcaecati. Ducimus corporis, soluta provident animi eligendi assumenda facilis magnam facere blanditiis, placeat maxime cumque. Natus assumenda magni voluptas molestiae!",
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium obcaecati. Ducimus corporis, soluta provident animi eligendi assumenda facilis magnam facere blanditiis, placeat maxime cumque. Natus assumenda magni voluptas molestiae!",
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium obcaecati. Ducimus corporis, soluta provident animi eligendi assumenda facilis magnam facere blanditiis, placeat maxime cumque. Natus assumenda magni voluptas molestiae!",
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium obcaecati. Ducimus corporis, soluta provident animi eligendi assumenda facilis magnam facere blanditiis, placeat maxime cumque. Natus assumenda magni voluptas molestiae!",
        },
    ];

    return (
        <Wrapper id="Testimonials">
            <Heading>
                <span>Clients always get</span>
                <span> Exceptional Work</span>
                <span> from me...</span>
                {!darkMode && (
                    <>
                        <Blur1></Blur1>
                        <Blur2></Blur2>
                    </>
                )}
            </Heading>

            {/* Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <Slider>
                            <img src={client.img} alt={`Client ${index}`} />
                            <span>{client.review}</span>
                        </Slider>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
}

export default Testimonial;

const Wrapper = styled.div`
    padding: 0 3rem 0 3rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    & > .swiper {
        width: 100%;
        height: 70%;
    }

    .swiper-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .swiper-pagination-bullet-active {
        background: var(--orange);
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

const Heading = styled.div`
    align-self: start;

    & > * {
        font-size: 2rem;
        font-weight: bold;
    }

    & > span {
        z-index: 999;
    }

    & > span:nth-child(2) {
        color: var(--orange);
    }
`;

const Blur1 = styled.div`
    background: var(--purple);
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    background: #edd0ff;
    filter: blur(72px);
    z-index: 1;
    left: 38rem;
    top: 16rem;
`;

const Blur2 = styled(Blur1)`
    background: skyblue;
    top: 9rem;
    left: 0rem;
`;

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    width: 30rem;
    height: 12rem;
    background: rgba(255, 255, 255, 0.26);
    border: 7px solid var(--blueCard);
    box-shadow: var(--boxShadow);
    border-radius: 20px;

    & > img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;

        @media screen and (max-width: 480px) {
            width: 70px;
            height: 70px;
        }
    }

    & > span {
        color: var(--gray);
    }
`;
