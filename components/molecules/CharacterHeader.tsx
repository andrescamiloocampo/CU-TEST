import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { type ReactElement, useEffect, useState } from "react";
import { CharacterSpanishModel } from "@/models/character.model";
import { StyleSheet } from "react-native";

interface Props {
   character: CharacterSpanishModel; 
}

export const CharacterHeader = ({character}:Props):ReactElement => {

  return (
    <ThemedView style={styles.characterCard}>
      <ThemedView style={styles.headingContent}>
        <ThemedView style={styles.photoContainer} />
        <ThemedView style={styles.headingText}>
          <ThemedText type="title" style={styles.characterName}>
            {character?.nombre ?? "No name"}
          </ThemedText>
          <ThemedText type="default">
            Born: {character?.ano_nacimiento}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.details}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  characterCard: {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headingContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  photoContainer: {
    width: 150,
    height: 150,
    backgroundColor: "gainsboro",
    borderRadius: 100,
  },
  headingText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  characterName: {},
  details: {},
});
