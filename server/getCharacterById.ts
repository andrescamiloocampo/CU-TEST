import { characterAdapter } from "@/adapters/characterAdapter";
import {
  CharacterModel,
  CharacterSpanishModel,
} from "@/models/character.model";

export const getCharacterById = async (  
  id: number
): Promise<CharacterSpanishModel[]> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/${id}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) return [];

    const data:CharacterModel = await response.json();    
    const adaptedResp: CharacterSpanishModel = characterAdapter(data)
    return [adaptedResp];

  } catch (error) {
    console.error(`Fetch <GET> error:${error}`);
    return [];
  }
};
