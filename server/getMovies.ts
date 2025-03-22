import { MovieModel } from "@/models/movie.model";
import { movieAdapter } from "@/adapters/movieAdapter";
import { MovieSpanishModel } from "@/models/movie.model";

export const getMovies = async():Promise<MovieSpanishModel[]> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        const response = await fetch('https://swapi.py4e.com/api/films', {
            method: 'GET',
            headers: headers,
        });
        console.log('response',response);
        const resp = await response.json();

        const data:MovieModel[] = resp.results;
        const adapted_response = data.map(movie => movieAdapter(movie));        
        return adapted_response;
    } catch (error) {
        console.error(`Fetch <GET> error:${error}`)
        return [];
    }
}