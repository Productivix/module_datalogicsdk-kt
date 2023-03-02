import * as React from 'react';

import {StyleSheet,View,Text,NativeEventEmitter,Alert } from 'react-native';
//import { multiply } from 'react-native-module_datalogicsdk-kt';

import { BarcodeManager } from 'react-native-module_datalogicsdk-kt';

export default function App() {
  

 /*  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []); */
  React.useEffect(() => {
    try {
      const eventEmitter = new NativeEventEmitter(BarcodeManager);
      eventEmitter.addListener('successCallback', (map) => {
        Alert.alert('Barcode Result', map.barcodeData + '\n' + map.barcodeType);
      });
      BarcodeManager.addReadListener();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>please press Scan </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
