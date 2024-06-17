import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { MxGridList, MxInstaGrid } from 'mx-rn-grid-flashlist';
import { data } from './DummyData';

export default function App() {
  return (
    <SafeAreaView style={styles.conatiner}>
      <Text style={styles.titleText}>MX Instagram Like Grid</Text>
      <MxInstaGrid
        data={data}
        ImageKey={'image1'}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.titleText}>MX Simple Grid</Text>
      <MxGridList
        numColumns={3}
        data={data}
        renderItem={({ item }: any) => (
          <Image source={{ uri: item.image1 }} style={styles.imageStyle} />
        )}
        renderExernalStyle={styles.mainConatiner}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  mainConatiner: {
    overflow: 'hidden',
    height: 150,
    margin: 1,
  },
  imageStyle: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 2,
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
});
