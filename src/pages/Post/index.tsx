import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { PostContainer, PostHeader, BackLinkContainer } from "./styles";

export function Post() {
  return (
  <PostContainer>
    <PostHeader>
      <nav>
        <Link to='/'>
          <BackLinkContainer>
            <CaretLeft weight="bold" />

            <span>Voltar</span>
          </BackLinkContainer>
        </Link>

        <a href="">
          <BackLinkContainer>
            <span>Ver no github</span>

            <ArrowSquareOut weight="bold" />
          </BackLinkContainer>
        </a>
      </nav>
    </PostHeader>
  </PostContainer>
  )
}