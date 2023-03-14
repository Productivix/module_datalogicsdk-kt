# react-native-module_datalogicsdk-kt

module to scan barcodes with a Datalogic based on sdk, in KT
based on Datalogic V2.0.3 et Sdk v1.33 , rebuilt for React Native ^0.71 by Productivix sarl

## Installation

```sh
npm install react-native-module_datalogicsdk-kt
or yarn add react-native-module_datalogicsdk-kt

or npm i https://github.com/Productivix/module_datalogicsdk-kt
or yarn add https://github.com/Productivix/module_datalogicsdk-kt
```

## Usage

### Settings

in terminal settings, Datalogic settings, Scanner settings, Wedge,
disable everything to avoid conflic in the UI of signals comming from 2 ways
Save in "scanner settings" by "Commit" - if not, at reboot the old configuration comes back.

### in your program

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
