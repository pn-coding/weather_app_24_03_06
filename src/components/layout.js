import styled from "styled-components";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #eee;
  padding: 150px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(209, 206, 255, 1) 0%,
    rgba(108, 214, 255, 1) 69%,
    rgba(0, 200, 241, 1) 100%
  );
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
