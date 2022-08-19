import {Box, Button, VStack} from 'native-base';
import * as React from 'react';
import {useDispatch} from 'react-redux';

import * as Keychain from 'react-native-keychain';

export interface Props {}

// const {RNSettingsOpen} = NativeModules;

const Settings: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onEnable = () => {
    const type = Keychain.getSupportedBiometryType();

    console.log('type', type);
  };

  // const onEnableBiometric = async () => {
  //   let {available, biometryType} = await rnBiometrics.isSensorAvailable();
  //   if (available && biometryType === BiometryTypes.TouchID) {
  //     console.log('TouchID is supported', biometryType);
  //   } else if (available && biometryType === BiometryTypes.FaceID) {
  //     console.log('FaceID is supported', biometryType);
  //   } else if (available && biometryType === BiometryTypes.Biometrics) {
  //     console.log('Biometric is supported', biometryType);
  //   } else {
  //     dispatch(biometricStatusSetter(false));

  //     return Platform.OS === 'ios'
  //       ? await Linking.openSettings()
  //       : await RNSettingsOpen.openSettings();
  //   }

  //   const {publicKey} = await rnBiometrics.createKeys();

  //   console.log('publicKey', publicKey);

  //   dispatch(biometricStatusSetter(true));
  // };

  return (
    <VStack justifyContent="center" alignItems="center" flex={1} safeArea>
      <Box maxW="xs">
        <Button onPress={onEnable}>Enable Biometric Authentication</Button>
      </Box>
    </VStack>
  );
};

export default Settings;
