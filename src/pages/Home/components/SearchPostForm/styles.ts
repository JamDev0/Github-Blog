import styled from 'styled-components'

export const SearchPostFormContainer = styled.form`
  width: 100%;

  margin-bottom: 3rem;

  > input {
    width: 100%;

    background-color: ${(params) => params.theme.colors.base.input};

    border: 1px solid ${(params) => params.theme.colors.base.border};
    border-radius: 6px;

    font-size: ${(params) => params.theme.text.text.md['font-size']};
    color: ${(params) => params.theme.colors.base.text};

    padding: 0.75rem 1rem;

    ::placeholder {
      color: ${(params) => params.theme.colors.base.label};
    }
  }
`
