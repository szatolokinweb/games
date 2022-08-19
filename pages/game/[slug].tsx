import { NextPage, GetServerSideProps } from "next";
import { loadGameDetail, loadGameScreenshots } from "../../api";
import { Wrapper } from "../../components/Wrapper";
import { Slider } from "../../components/Slider";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };

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

const Game: NextPage<{
  gameDetail: Api.GameDetail;
  gameScreenshots: Api.GameScreenshot[];
}> = ({ gameDetail, gameScreenshots }) => {
  const { name, released, rating, description, website } = gameDetail;

  return (
    <>
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
    </>
  );
};

export default Game;
