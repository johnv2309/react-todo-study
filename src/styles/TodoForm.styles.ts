import styled from "styled-components";

export const TodoFormContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: ${(props) => props.theme.colors.bodyBackground};
    box-shadow: inset 1px 1px 2px 2px ${(props) => props.theme.colors.shadow};
    border: none;
    border-radius: 4px;
    flex: 1;
    padding: 0 0.5rem;
    color: ${(props) => props.theme.colors.font};
    transition: color 0.25s;
    ::placeholder {
      color: ${(props) => props.theme.colors.font};
      opacity: 0.25;
    }
  }

  button {
    height: 1.5rem;
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: ${(props) => props.theme.colors.font};
    transition: color 0.25s, opacity 0.25s;
    :disabled {
      cursor: not-allowed;
      opacity: 0.25;
    }
    :not(:disabled):hover {
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;
