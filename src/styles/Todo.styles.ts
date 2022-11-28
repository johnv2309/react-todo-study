import styled from "styled-components";

export const TaskContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bodyBackground};
  box-shadow: inset 1px 1px 2px 2px ${(props) => props.theme.colors.shadow};
  width: 100%;
  height: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;

  label {
    color: ${(props) => props.theme.colors.font};
    height: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    cursor: pointer;
    transition: color 0.25s;
    :hover {
      color: ${(props) => props.theme.colors.success};
    }
  }

  span {
    color: ${(props) => props.theme.colors.font};
    width: 100%;
    display: flex;
    align-items: center;
  }

  button {
    height: 1.5rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${(props) => props.theme.colors.font};
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    transition: color 0.25s;
    :hover {
      color: ${(props) => props.theme.colors.danger};
    }
  }

  input {
    display: none;
    :checked ~ span {
      text-decoration: line-through;
    }
    :checked ~ label:hover {
      color: ${(props) => props.theme.colors.attention};
    }
  }
`;
