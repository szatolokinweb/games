import { loadGameDetail, loadGameScreenshots } from "../../api";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import { Slider } from "../../components/Slider";
import { Stars } from "../../components/Stars";

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  try {
    const gameDetail = await loadGameDetail(slug);
    const gameScreenshots = await loadGameScreenshots(slug);

    return {
      props: {
        gameDetail,
        gameScreenshots,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Value = styled.span`
  font-weight: bold;
`;

const Frame = styled.div`
  position: relative;
  z-index: 0;

  margin: 20px 0;
  height: 300px;
  overflow: hidden;

  border-radius: 10px;

  img {
    object-fit: cover;
    object-position: top;
  }
`;

const GoLink = styled.a`
  margin-top: 20px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid black;
  border-radius: 10px;
  transition: 250ms;
  font-weight: bold;

  &:hover {
    background-color: #3eff8b;
    border-color: #3eff8b;
    color: white;
  }
`;

const Article = styled.div`
  font-size: 18px;
`;

const Info = styled.div`
  font-size: 18px;
`;

const Game = ({ gameDetail, gameScreenshots }) => {
  const { name, released, rating, description, website, background_image } =
    gameDetail;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>{name}</h1>
      {background_image && (
        <Frame>
          <Image src={background_image} layout="fill" priority />
        </Frame>
      )}
      <Info>
        Released: <Value>{released}</Value>
      </Info>
      <Info>
        Rating: <Value>{rating}</Value>
      </Info>
      <Stars rating={rating} />
      <Slider screenshots={gameScreenshots} />
      <Article
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <GoLink href={website} target="_blank" rel="noopener noreferrer">
        Перейти на сайт
      </GoLink>
    </>
  );
};

export default Game;
