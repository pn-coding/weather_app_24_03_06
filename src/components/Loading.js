import { SpinnerCircularFixed } from "spinners-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <SpinnerCircularFixed
        size={"100px"}
        color="crimson"
        speed={200}
        secondaryColor={"salmon"}
      />
    </Container>
  );
};
