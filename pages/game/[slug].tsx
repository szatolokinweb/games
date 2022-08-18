import { NextPage, GetServerSideProps } from "next";
import { loadGameDetail, loadGameScreenshots } from "../../api";
import { Wrapper } from "../../components/Wrapper";
import { Slider } from "../../components/Slider";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  return {
    props: {
      gameDetail: await loadGameDetail(slug),
      gameScreenshots: await loadGameScreenshots(slug),
    },
  };
};

const Game: NextPage<{
  gameDetail: Api.GameDetail;
  gameScreenshots: Api.GameScreenshot[];
}> = ({ gameDetail, gameScreenshots }) => {
  const { name, released, rating, description, website } = gameDetail;

  return (
    <Wrapper>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>{name}</h1>
      <div>Release date: {released}</div>
      <div>Rating: {rating}</div>
      <Slider screenshots={gameScreenshots} />
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <a href={website} target="_blank" rel="noopener noreferrer">
        Перейти на сайт
      </a>
    </Wrapper>
  );
};

export default Game;
