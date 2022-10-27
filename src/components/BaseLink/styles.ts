import styled from "styled-components";

export const BaseLink = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  color: ${(params) => params.theme.colors.brand.blue};
  text-decoration: none;

  border: none;
  border-bottom: 1px solid transparent;

  > svg {
    width: 0.75rem;

    line-height: 0;
  }

  :hover {
    border-bottom: 1px solid ${(params) => params.theme.colors.brand.blue};
  }

  > span {
    text-decoration: none;
    text-transform: uppercase;

    font-size: ${(params) => params.theme.text.components.link['font-size']};
    font-weight: ${(params) => params.theme.text.components.link['font-weight']};
    line-height: ${(params) => params.theme.text.components.link['line-height']};

    color: ${(params) => params.theme.colors.brand.blue};
  }
`