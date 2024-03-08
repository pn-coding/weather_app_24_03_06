import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { Loading } from "../components/Loading";
import { Layout } from "../components/layout";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Weather } from "../components/Weather";

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });
  // =>api에 요청시 사용하는 hook
  // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
  // =>useQuery({
  //   queryKey:["요청값"],
  //   queryFn: 요청할 함수
  // })

  // console.log("로딩중인지?" + isLoading);

  return (
    <div>
      {isLoading ? (
        <Layout>
          <Loading />
        </Layout>
      ) : (
        <Weather weatherData={data} />
      )}
    </div>
  );
};
