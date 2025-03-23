import type { Planet,PlanetSpanish } from "@/models/planet.model";

export const planetAdapter = (planet: Planet):PlanetSpanish => {
    return {
        nombre: planet.name ?? '',
        periodoRotacion: planet.rotationPeriod ?? '',
        periodoOrbital: planet.orbitalPeriod ?? '',
        diametro: planet.diameter ?? '',
        clima: planet.climate ?? '',
        gravedad: planet.gravity ?? '',
        terreno: planet.terrain ?? '',
        aguaSuperficial: planet.surfaceWater ?? '',
        poblacion: planet.population ?? '',
        residentes: planet.residents ?? [],
        peliculas: planet.films ?? [],
        creado: planet.created ?? '',
        editado: planet.edited ?? '',
        url: planet.url ?? ''
    }
}   
