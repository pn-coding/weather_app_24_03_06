import styled from "styled-components";
import { Layout } from "./layout";

const TempInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 90px;
    font-weight: 700;
    margin-bottom: 50px;
    margin-left: 30px;
  }

  h4 {
    font-size: 30px;
  }
`;

const Divde = styled.div`
  width: 50px;
  height: 5px;
  background-color: #fff;
`;

const BottomCon = styled.div`
  width: 100%;
  /* margin-top: 400px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 34%;
  text-align: center;
  border-right: 1px solid #dbdbdb;
  &:last-child {
    border: none;
    padding: 0;
  }
  h3 {
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Weather = ({ weatherData }) => {
  return (
    <Layout>
      <TempInfo>
        <h3>{Math.round(weatherData?.main?.temp)}°</h3>
        <h4>{weatherData?.name}</h4>
      </TempInfo>

      <Divde />

      <BottomCon>
        <Con>
          <h3>체감 온도</h3>
          <p>{Math.round(weatherData?.main?.feels_like)}°</p>
        </Con>
        <Con>
          <h3>최고 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_max)}°</p>
        </Con>
        <Con>
          <h3>최저 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_min)}°</p>
        </Con>
      </BottomCon>
    </Layout>
  );
};
