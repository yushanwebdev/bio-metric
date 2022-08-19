import {Box, Heading, VStack} from 'native-base';
import * as React from 'react';

interface Props {
  componentId: string;
}

const Home: React.FC<Props> = () => {
  return (
    <VStack justifyContent="center" alignItems="center" flex={1} safeArea>
      <Box maxW="xs">
        <Heading textAlign="center">Hello Yushan, Welcome to the App</Heading>
      </Box>
    </VStack>
  );
};

export default Home;
