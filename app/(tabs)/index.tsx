import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/atoms/ThemedText';
import {useEffect,useState} from 'react';
import { getMovies } from '@/server/getMovies';
import { MovieSpanishModel } from '@/models/movie.model';
import { MovieCard } from '@/components/organisms/MovieCard';


export default function HomeScreen() {
  const [movies,setMovies] = useState<MovieSpanishModel[]>([]);

  useEffect(()=>{
    const fetchMovies = async() => {
      const data = await getMovies() ?? [];
      setMovies(data);
    }
    fetchMovies();
  },[]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
              <Image
                style={styles.headerImage}
                source={require('@/assets/images/cover.jpg')}
              />
            }
      >
       <ThemedText type="title">Star wars wiki</ThemedText>              
       <ThemedText type="default">Aquí encontraras información de tus películas favoritas.</ThemedText>
       {
        movies.map((movie,index)=>(
          <MovieCard {...movie} key={index}/>
        ))
       }
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    height: 250,
    width: 411,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});
