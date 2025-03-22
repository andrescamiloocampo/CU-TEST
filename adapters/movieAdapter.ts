import { MovieModel, MovieSpanishModel } from "@/models/movie.model"

export const movieAdapter = (movie:MovieModel):MovieSpanishModel => {
    return {
        titulo: movie.title,
        episodio_id: movie.episode_id,
        texto_apertura: movie.opening_crawl,
        director: movie.director,
        productores: movie.producer,
        fecha_estreno: movie.release_date,
        personajes: movie.characters,
        planetas: movie.planets,
        naves: movie.starships,
        vehiculos: movie.vehicles,
        especies: movie.species,
        creado: movie.created,
        editado: movie.edited,
        url: movie.url,
    }
}