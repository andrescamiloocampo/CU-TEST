import { StyleSheet, Image, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { PaginationButton } from "@/components/atoms/PaginationButton";
import { PageCounter } from "@/components/atoms/PageCounter";
import { type ReactElement, useEffect, useRef, useState } from "react";
import { getPeople } from "@/server/getPeople";
import { CharacterSpanishModel } from "@/models/character.model";
import { SearchBar } from "@/components/atoms/SearchBar";
import { CharacterCard } from "@/components/organisms/CharacterCard";
import { getCharacterByName } from "@/server/getCharacterByName";
import { useRouter } from "expo-router";
import { Pagination } from "@/components/organisms";

type actionT = "next" | "prev";

export default function PeopleScreen(): ReactElement {
  const pages = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [people, setPeople] = useState<CharacterSpanishModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const isFirstRender = useRef(true);

  const navigateToCharacter = (characterName: string) => {
    router.push(`/(tabs)/people/character?name=${characterName ?? ""}`);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetchCharacter = async () => {
      const data = await getCharacterByName(searchTerm);
      setPeople(data);
    };

    fetchCharacter();
  }, [searchTerm]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople(currentPage);
      setPeople(data);
    };

    fetchPeople();
  }, [currentPage, searchTerm]);  

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
  
      <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />

      <ThemedView style={styles.peopleContainer}>
        {people.map((character, index) => {
          if (character.nombre.length > 0) {
            return (
              <TouchableOpacity
                onPress={() => navigateToCharacter(character.nombre)}
                key={`${character.nombre} ${index + 1}`}
              >
                <CharacterCard {...character} />
              </TouchableOpacity>
            );
          }
        })}
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
});
