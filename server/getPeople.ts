import { characterAdapter } from "@/adapters/characterAdapter";
import {
  CharacterModel,
  CharacterSpanishModel,
} from "@/models/character.model";
const {EXPO_PUBLIC_SWAPI_URL} = process.env;

export const getPeople = async (
  page: number  
): Promise<CharacterSpanishModel[]> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {        
    const response = await fetch(
      `${EXPO_PUBLIC_SWAPI_URL}/people/?page=${page}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    const resp: CharacterModel[] = data.results;
    const adaptedResp: CharacterSpanishModel[] = resp.map((character) =>
      characterAdapter(character)
    );
    return adaptedResp;
  } catch (error) {
    console.error(`Fetch <GET> error:${error}`);
    return [];
  }
};
