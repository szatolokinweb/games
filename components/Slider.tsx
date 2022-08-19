import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";
import { Pagination } from "swiper";

const StyledSwiper = styled(Swiper)`
  margin: 20px 0;
  padding: 20px;
  padding-bottom: 40px;
  height: 500px;
  background-color: #141414;
  border-radius: 20px;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (min-width: 414px) {
    height: 300px;
  }
`;

export const Slider: FC<{ screenshots: Api.GameScreenshot[] }> = ({
  screenshots,
}) => (
  <StyledSwiper modules={[Pagination]} pagination={{ clickable: true }} loop>
    {screenshots.map(({ id, image }) => (
      <SwiperSlide key={id}>
        <img src={image} />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);
