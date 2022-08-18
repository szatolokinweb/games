import { NextPage, GetServerSideProps } from "next";
import { loadGameDetail } from "../../api";
import { Wrapper } from "../../components/Wrapper";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  return {
    props: {
      gameDetail: await loadGameDetail(slug),
    },
  };
};

const Game: NextPage<{ gameDetail: Api.GameDetail }> = ({ gameDetail }) => {
  const { name, released, rating, description, website } = gameDetail;

  return (
    <Wrapper>
      <h1>{name}</h1>
      <div>Release date: {released}</div>
      <div>Rating: {rating}</div>
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
