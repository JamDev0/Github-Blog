import styled, { css } from 'styled-components'

interface DataBadgeContainerParams {
  textColor: 'dark' | 'light'
}

export const DataBadgeContainer = styled.div<DataBadgeContainerParams>`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  width: fit-content;

  font-size: ${(params) => params.theme.text.text.md['font-size']};
  line-height: 100%;

  ${(params) =>
    params.textColor === 'light'
      ? css`
          color: ${(params) => params.theme.colors.base.subtitle};
        `
      : css`
          color: ${(params) => params.theme.colors.base.span};
        `}

  > img,
  svg {
    width: 1.125rem;
    aspect-ratio: 1/1;
  }

  > svg {
    line-height: 0;

    color: ${(params) => params.theme.colors.base.label};
  }
`
