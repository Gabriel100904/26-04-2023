import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


export default function App() {
  return (
    <View style={styles.container}>
          <TextInput />
          <Text style={{color: 'white'}}> 
          Destacado V
          </Text>
        <AssetExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
});
