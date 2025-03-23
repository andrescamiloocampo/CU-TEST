import { CharacterModel, CharacterSpanishModel } from "@/models/character.model";

export const characterAdapter = (character: CharacterModel):CharacterSpanishModel => {    
    return {
        nombre: character?.name ?? '',
        altura: character?.height ?? '',
        masa: character?.mass ?? '',
        color_cabello: character?.hair_color ?? '',
        color_piel: character?.skin_color ?? '',
        color_ojos: character?.eye_color ?? '',
        ano_nacimiento: character?.birth_year ?? '',
        genero: character?.gender ?? '',
        planeta_natal: character?.homeworld ?? '',
        peliculas: character?.films ?? '',
        especies: character?.species ?? '',
        vehiculos: character?.vehicles ?? '',
        naves_estelares: character?.starships ?? '',
        creado: character?.created ?? '',
        editado: character?.edited ?? '',
        url: character?.url ?? ''
    }
}