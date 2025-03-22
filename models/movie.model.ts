export interface MovieModel {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }
  
  export interface MovieSpanishModel {
    titulo: string;
    episodio_id: number;
    texto_apertura: string;
    director: string;
    productores: string;
    fecha_estreno: string;
    personajes: string[];
    planetas: string[];
    naves: string[];
    vehiculos: string[];
    especies: string[];
    creado: string;
    editado: string;
    url: string;
  }