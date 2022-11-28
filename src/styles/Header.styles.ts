import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px 4px 0 0;
  padding: 0.5rem;
  h2 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.accentFont};
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
