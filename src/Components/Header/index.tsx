import React from 'react';
import { Center, Stack, Text } from 'native-base';

const Header = () => {
  return (
    <Center>
      <Stack space="2" height="16" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">
          Git hub
        </Text>
      </Stack>
    </Center>
  );
};

export default Header;
