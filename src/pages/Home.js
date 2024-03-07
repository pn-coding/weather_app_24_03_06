import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Layout } from "../components/layout";

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

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });
  // =>api에 요청시 사용하는 hook
  // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
  // =>useQuery({
  //   queryKey:["요청값"],
  //   queryFn: 요청할 함수
  // })

  // console.log("로딩중인지?" + isLoading);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Layout>
          <Loading />
        </Layout>
      ) : (
        <Layout>
          <TempInfo>
            <h3>{Math.round(data?.main?.temp)}°</h3>
            <h4>{data?.name}</h4>
          </TempInfo>

          <Divde />

          <BottomCon>
            <Con>
              <h3>체감 온도</h3>
              <p>{Math.round(data?.main?.feels_like)}°</p>
            </Con>
            <Con>
              <h3>최고 온도</h3>
              <p>{Math.round(data?.main?.temp_max)}°</p>
            </Con>
            <Con>
              <h3>최저 온도</h3>
              <p>{Math.round(data?.main?.temp_min)}°</p>
            </Con>
          </BottomCon>
        </Layout>
      )}
    </div>
  );
};
