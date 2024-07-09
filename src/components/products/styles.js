import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px 0 40px 40px;
  grid-row-gap: 20px;

  @media (max-width: 915px) {
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: center;
    align-items: center;
  }
`;
