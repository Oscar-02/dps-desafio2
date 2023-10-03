import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/cars?model=corolla&year=2018', {
      method: 'GET',
      headers: { 'X-Api-Key': '8GtAb9sZhCA5H/jOQicnzA==spi1N5WegiDMBFEe'},

    })
  .then(response => response.json())
  .then(data => setCars(data))
  .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {cars.map(car => (
        <View key={car.id}>
          {console.log(JSON.stringify(car))}
          <Text>{car.make}</Text>
          <Text>{car.model}</Text>
          <Text>{car.year}</Text>
          <Text>{car.year}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});