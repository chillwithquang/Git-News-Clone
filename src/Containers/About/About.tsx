import React from 'react';
import { ScrollView, Box, VStack, Image, useColorModeValue } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AnimatedColorBox from '@/Components/AnimatedColorBox';
import MastHead from '@/Components/MastHead';
import LinkButton from '@/Components/LinkButton';
import Navbar from '@/Components/Navbar';

const AboutContainer = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.900', 'primary.900')}
      w="full"
    >
      <MastHead
        title="About this app"
        image={require('../../Assets/mario.jpg')}
      >
        <Navbar />
      </MastHead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.900', 'primary.900')}
        mt="-20px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../../Assets/logo.png')}
              resizeMode="cover"
              borderRadius="full"
              w="120px"
              h="120px"
              alt="author"
            />
            <LinkButton
              href="https://github.com/chillwithquang"
              colorScheme="blue"
              mt="10px"
              size="lg"
              borderRadius="full"
              leftIcon={<Icon name="github" color="white" solid size={15} />}
            >
              chillwithquang
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutContainer;
