import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    // if (isFocused && route.params) {
    //   setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    // }
    if (isFocused) {
      loadedPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
