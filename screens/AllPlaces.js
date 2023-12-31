import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/Places/PlacesList";

export default function AllPlaces({route}) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if (isFocused && route.params) {
      if (!loadedPlaces.includes(route.params.place)) {
        setLoadedPlaces((currPlaces) => [...currPlaces, route.params.place]);
      }
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces}/>;
}
