import { PlanetSpanish, Planet } from "@/models/planet.model";
import { planetAdapter } from "@/adapters";

const { EXPO_PUBLIC_SWAPI_URL } = process.env;

export const getPlanets = async (page: number): Promise<PlanetSpanish[]> => {
  const headers = new Headers();
  headers.append("Content-type", "application.json");

  try {
    const response = await fetch(
      `${EXPO_PUBLIC_SWAPI_URL}/planets/?page=${page}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    const resp: Planet[] = data.results;
    const adaptedResp = resp.map((planet) => planetAdapter(planet));

    return adaptedResp;
  } catch (error) {
    console.error(`Fetch <GET> error:${error}`);
    return [];
  }
};
