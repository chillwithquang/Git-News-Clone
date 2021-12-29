import React from 'react';
import { useSelector } from 'react-redux';
import {
  ScrollView,
  Box,
  VStack,
  useColorModeValue,
  Heading,
  Icon,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { RootState } from '@/Store';
import { UserInfoType } from '@/Store/User';
import AnimatedColorBox from '@/Components/AnimatedColorBox';
import MastHead from '@/Components/MastHead';
import LinkButton from '@/Components/LinkButton';
import Navbar from '@/Components/Navbar';
import FastImage from '@/Components/Image';

const AboutContainer = () => {
  const userAuth: UserInfoType = useSelector<RootState>(
    state => state.user.userLogin,
  ) as UserInfoType;

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
        {!userAuth || !userAuth.id ? (
          <VStack flex={1} space={4}>
            <Box alignItems="center">
              <FastImage
                source={require('../../Assets/logo.png')}
                resizeMode="cover"
                borderRadius="full"
                w="120px"
                h="120px"
                alt="author"
              />
              <LinkButton
                href="https://github.com/chillwithquang"
                bg="dark.100"
                color="white"
                size="lg"
                leftIcon={<Icon as={FontAwesome} name="github" size="sm" />}
                mt="10px"
              >
                chillwithquang
              </LinkButton>
            </Box>
          </VStack>
        ) : (
          <VStack flex={1} space={4}>
            <Box alignItems="center">
              <FastImage
                source={{ uri: userAuth.avatar }}
                resizeMode="cover"
                borderRadius="full"
                w="120px"
                h="120px"
                alt="User"
              />
              <Heading size="2xl" mt="10px" color="white">
                {userAuth.name}
              </Heading>
            </Box>
          </VStack>
        )}
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutContainer;
