import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = 37.57940843688738;
  const defalutLon = 126.96036830361804;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defalutLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  //   console.log(lat, lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  //   *useEffect(() => {}, [])
  //   =>페이지가 랜더링 되었을때
  //   한번만 실행,
  //   랜더링 후 실행,
  //   업데이트가 되었을때 실행을 지정함

  return {
    lat,
    lon,
  };
};
