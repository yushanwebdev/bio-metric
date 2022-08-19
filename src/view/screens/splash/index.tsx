import {Button, Center, Input, Skeleton, Stack, VStack} from 'native-base';
import * as React from 'react';
import {useDispatch} from 'react-redux';
import {splashLaunched} from '../../../../shared/redux/actionCreators/app';

import {tabbedNavigation} from '../../../navigators/navigation';

interface Props {}

const Splash: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const navigateToHome = () => {
    tabbedNavigation();
  };

  React.useEffect(() => {
    splashLaunched();
    // biometricKeysChecker();
  }, []);

  return (
    <VStack justifyContent="center" flex={1} safeArea>
      <Skeleton isLoaded={false !== null}>
        <Center>
          {false ? (
            <Stack space={4}>
              <Button>Login with Biometrics</Button>
              <Button variant="subtle">Login with Pin</Button>
            </Stack>
          ) : (
            <Stack space={4} w="100%" alignItems="center">
              <Input
                w={{
                  base: '75%',
                  md: '25%',
                }}
                placeholder="Name"
                value="yushan"
              />
              <Input
                w={{
                  base: '75%',
                  md: '25%',
                }}
                type="password"
                placeholder="Password"
                value="pass"
              />
              <Button onPress={navigateToHome}>Log In</Button>
            </Stack>
          )}
        </Center>
      </Skeleton>
    </VStack>
  );
};

export default Splash;
