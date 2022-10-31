import styled from "styled-components";

export const LoadingTextPlaceholderContainer = styled.svg`
    width: 100%;

    & > linearGradient {
        & > .stopWhite {
            stop-color: white;
            stop-opacity: 0.6;
        }

        & > .stopGray {
            stop-color: ${props => props.theme.colors.base.label};
            stop-opacity: 0.6;
        }
    }
`