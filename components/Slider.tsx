import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";
import { Pagination } from "swiper";

const StyledSwiper = styled(Swiper)`
  padding: 10px;
  padding-bottom: 40px;
  height: 300px;
  background-color: #555555;
  border: 1px solid black;
  border-radius: 10px;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
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
