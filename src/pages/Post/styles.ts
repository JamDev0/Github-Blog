import styled from "styled-components";
import { BaseLink } from "../../components/BaseLink/styles";

export const PostContainer = styled.main`
  max-width: ${params => params.theme["main-max-width"]};

  width: 100%;

  padding-inline: 6rem;
`

export const PostHeader = styled.header`
  width: 100%;

  background-color: ${params => params.theme.colors.base.profile};

  border-radius: 10px;

  padding: 2rem;
  
  > nav {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`



export const BackLinkContainer = styled(BaseLink)`
  > span {
    text-decoration: none;
  }
`