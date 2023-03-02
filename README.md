# react-native-module_datalogicsdk-kt

module to scan barcodes with a Datalogic based on sdk, in KT
based on Datalogic V2.0.3 , rebuilt for React Native 0.71 by Productivix

## Installation

```sh
npm install react-native-module_datalogicsdk-kt
or yarn add eact-native-module_datalogicsdk-kt
```

## Usage

```js
import { BarcodeManager } from 'react-native-module_datalogicsdk-kt';
import { NativeEventEmitter, Alert } from 'react-native';
// ...
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
