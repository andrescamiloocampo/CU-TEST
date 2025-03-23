import { characterAdapter } from "@/adapters/characterAdapter";
import {
  CharacterModel,
  CharacterSpanishModel,
} from "@/models/character.model";

const {EXPO_PUBLIC_SWAPI_URL} = process.env;

export const getCharacterByName = async (  
  name: string,  
): Promise<CharacterSpanishModel[]> => {  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");  

  try {
    const response = await fetch(
      `${EXPO_PUBLIC_SWAPI_URL}/people/?search=${name}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) return [];

    const data = await response.json();      
    const resp:CharacterModel = data.results[0];
    const adaptedResp: CharacterSpanishModel = characterAdapter(resp)    

    return [adaptedResp];      
  } catch (error) {
    console.error(`Fetch <GET> error:${error}`);
    return [];
  }
};
