import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Box, Stack, Text, useColorModeValue } from 'native-base';

const Header = () => {
  return (
    <Box px={2}>
      <Stack flexDirection="row" space="2" height="20" alignItems="center">
        <Icon name="github" solid size={32} />
        <Text
          fontSize="4xl"
          fontWeight="bold"
          ml="2"
          color={useColorModeValue('darkText', 'lightText')}
        >
          Git hub
        </Text>
      </Stack>
    </Box>
  );
};

export default Header;
