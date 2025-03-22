import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/atoms/ThemedText';
import { ThemedView } from '@/components/molecules/ThemedView';

export default function PlanetsScreen() {
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
        <ThemedText type="title">Planets</ThemedText>
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
    flexDirection: 'row',
    gap: 8,
  },
});
