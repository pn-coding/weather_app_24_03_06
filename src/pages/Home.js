import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export const Home = () => {
  const query = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(query);
  return <div></div>;
};
