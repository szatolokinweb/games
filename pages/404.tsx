import Link from "next/link";

import { Wrapper } from "../components/Wrapper";

const Custom404 = () => (
  <Wrapper>
    <h1>Страница не найдена</h1>
    <Link href="/">
      <a>Главная</a>
    </Link>
  </Wrapper>
);

export default Custom404;
