import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default function Azul({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Azul Page</Text>
      <Button title="amarelo" onPress={ () => navigation.navigate("amarelo") } />
      <Button title="verde" onPress={ () => navigation.navigate("verde") } />
      <Button title="vermelho" onPress={ () => navigation.navigate("vermelho") } />
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
