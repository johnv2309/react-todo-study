import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  padding: 0.5rem;
  height: fit-content;
  margin: 1rem auto;
  @media (min-width: 50.0625rem) {
    width: 40rem;
  }
`;
