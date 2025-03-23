import { ThemedView } from "@/components/atoms/ThemedView";
import { type ReactElement, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getCharacterByName } from "@/server/getCharacterByName";
import { CharacterSpanishModel } from "@/models/character.model";
import { StyleSheet, Image, ScrollView } from "react-native";
import { CharacterHeader, CharacterDetails } from "@/components/molecules";
import { DetailedStat } from "@/components/molecules/DetailedStat";
import { ThemedText } from "@/components/atoms";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Appearance } from "@/components/molecules/Appearance";

export default function CharacterPage(): ReactElement {
  const { name } = useLocalSearchParams();
  const [character, setCharacter] = useState<CharacterSpanishModel>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getCharacterByName(name.toString());
      if (response) setCharacter(response[0]);
    };

    fetchUser();
  }, [name]);

  return (
    <ScrollView>
      <ThemedView style={styles.characterPage}>
        <CharacterHeader character={character!} />
        <CharacterDetails
          height={character?.altura}
          gender={character?.genero}
          mass={character?.masa}
        />
        <DetailedStat
          icon="plane.fill"
          tag="Planeta natal"
          value={character?.planeta_natal}
        />
        <DetailedStat
          icon="boat.fill"
          tag="Naves"
          value={character?.naves_estelares.join(",")}
        />
        <DetailedStat
          icon="car.fill"
          tag="Vehiculos"
          value={character?.vehiculos.join(",")}
        />

        <ThemedText type="title" style={styles.title}>
          Apariencia fisica
        </ThemedText>

        <Appearance
          hair={character?.color_cabello ?? ""}
          eyes={character?.color_ojos ?? ""}
          skin={character?.color_piel ?? ""}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  characterPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
  },
});
