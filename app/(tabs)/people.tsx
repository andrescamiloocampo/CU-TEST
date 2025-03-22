import { StyleSheet, Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/molecules/ThemedView";
import { PaginationButton } from "@/components/atoms/PaginationButton";
import { PageCounter } from "@/components/atoms/PageCounter";
import { useEffect, useRef, useState } from "react";
import { getPeople } from "@/server/getPeople";
import { CharacterSpanishModel } from "@/models/character.model";
import { SearchBar } from "@/components/atoms/SearchBar";
import { CharacterCard } from "@/components/organisms/CharacterCard";
import { getCharacterById } from "@/server/getCharacterById";

type actionT = "next" | "prev";

export default function TabTwoScreen() {
  const pages = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [people, setPeople] = useState<CharacterSpanishModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<number | string>("");

  // useEffect(() => {
  //   const fetchPeople = setTimeout(async () => {
  //     const data = await getCharacterById(Number(searchTerm));
  //     setPeople(data);
  //   }, 300);
  //   return () => clearTimeout(fetchPeople);
  // }, [searchTerm]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; 
    }

    const fetchCharacter = async () => {
      const data = await getCharacterById(Number(searchTerm));
      setPeople(data);
    }
    
    fetchCharacter();
  }, [searchTerm]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople(currentPage);
      setPeople(data);
    };

    fetchPeople();
  }, [currentPage,searchTerm]);

  const handlePage = (action: actionT) => {
    if (action == "next") {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, pages));
    }

    if (action == "prev") {
      setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/cover.jpg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Personas en el universo</ThemedText>
        <ThemedText type="default">
          ¿Que clase de personas tiene el universo?
        </ThemedText>
      </ThemedView>
      
      <ThemedView>
        <SearchBar
          searchPlaceholder="Encuentra un personaje por id"
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </ThemedView>

      <ThemedView style={styles.paginationContainer}>
        <PaginationButton
          onClick={() => {
            handlePage("prev");
          }}
          iconName="arrow-left"
        />

        <PageCounter count={currentPage} />

        <PaginationButton
          onClick={() => {
            handlePage("next");
          }}
          iconName="arrow-right"
        />
      </ThemedView>

      <ThemedView style={styles.peopleContainer}>
        {people.map((character, index) => (
          <CharacterCard {...character} key={`${character.nombre} ${index}`} />
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 411,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  peopleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
});
