import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/atoms/ThemedText';
import { ThemedView } from '@/components/atoms/ThemedView';
import { useEffect, useState } from 'react';
import { getPlanets } from '@/server';
import { PlanetSpanish } from '@/models/planet.model';
import { PlanetCard } from '@/components/organisms/PlanetCard';
import { Pagination } from '@/components/organisms';

export default function PlanetsScreen() {

  const pages = 7;
  const [planets,setPlanets] = useState<PlanetSpanish[]>([]);
  const [currentPage,setCurrentPage] = useState<number>(1)

  useEffect(()=>{
    const fetchPlanets = async() => {
      const data = await getPlanets(currentPage);      
      setPlanets(data);
    }
    fetchPlanets();
  },[currentPage])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
           style={styles.headerImage}
          source={require('@/assets/images/cover.jpg')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Planetas</ThemedText>
        <ThemedText type="default">El universo es enorme, ¿Crees conocerlos todos?</ThemedText>
      </ThemedView>

      <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>

      <ThemedView style={styles.planetsContainer}>
        {planets.map((planet,index)=>(
          <PlanetCard {...planet} key={`${planet.nombre} ${index}`}/>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
   headerImage: {
     height: 250,
     width: 411,
     bottom: 0,
     left: 0,
     position: 'absolute',
   },
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  planetsContainer: {

  }
});
