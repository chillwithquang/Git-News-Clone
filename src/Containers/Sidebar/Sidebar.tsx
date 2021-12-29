import React, { useCallback } from 'react';
import {
  IconButton,
  Heading,
  HStack,
  VStack,
  Avatar,
  useColorModeValue,
} from 'native-base';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

import __get from 'lodash/get';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RootState } from '@/Store';
import { saveUser, logOut, UserInfoType } from '@/Store/User';
import LocalStorage, { StorageKey } from '@/LocalStorage';
import AnimatedColorBox from '@/Components/AnimatedColorBox';
import MenuButton from '@/Components/MenuButton';
import FastImage from '@/Components/Image';
import { showMessageError } from '@/Utils';

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const tabRoute = state.routes[0];

  const dispatch = useDispatch();

  const userAuth: UserInfoType = useSelector<RootState>(
    rootState => rootState.user.userLogin,
  ) as UserInfoType;

  let currentRoute = 'Home';
  if (tabRoute && tabRoute.state) {
    currentRoute = tabRoute.state.routeNames[tabRoute.state.index];
  }

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  const handlePressLoginButton = useCallback(async () => {
    await LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      res => {
        if (res.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            if (data) {
              LocalStorage.setItem(StorageKey.SOCIAL_TOKEN, data.accessToken);
            }

            const responseInfoCallback = async (
              error: any,
              result: UserInfoType,
            ) => {
              if (error) {
                showMessageError(error);
              }

              if (result) {
                const user = {
                  id: result.id,
                  first_name: result.first_name,
                  last_name: result.last_name,
                  name: result.first_name + ' ' + result.last_name,
                  avatar: __get(result, 'picture.data.url', ''),
                };

                LocalStorage.setItem(StorageKey.USER_INFO, user);
                dispatch(saveUser({ ...user }));
              }
            };

            const infoRequest = new GraphRequest(
              '/me?fields=id,first_name,last_name,picture.type(large),email,gender',
              null,
              responseInfoCallback,
            );

            setTimeout(
              () => new GraphRequestManager().addRequest(infoRequest).start(),
              200,
            );
          });
        }
      },
    );
  }, [dispatch]);

  const handlePressLogOutButton = useCallback(async () => {
    await LocalStorage.clearStorage();
    dispatch(logOut());
    LoginManager.logOut();
  }, [dispatch]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('darkBlue.800', 'blue.50')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: FontAwesome5,
              name: 'chevron-left',
              size: 5,
              color: 'blue.800',
            }}
          />
        </HStack>
        {!userAuth || !userAuth.id ? (
          <VStack>
            <FastImage
              source={require('../../Assets/robot.jpg')}
              size="24"
              borderRadius="100"
              borderColor="secondary.500"
              borderWidth={3}
            />
            <Heading mb={4} size="xl" color="lightText">
              chillwithquang
            </Heading>
          </VStack>
        ) : (
          <VStack>
            <FastImage
              source={{ uri: userAuth.avatar }}
              size="24"
              borderRadius="100"
              borderColor="secondary.500"
              borderWidth={3}
            />
            <Heading mb={4} size="xl" color="lightText">
              {userAuth.name}
            </Heading>
          </VStack>
        )}
        <MenuButton
          active={currentRoute === 'Home'}
          onPress={handlePressMenuMain}
          icon="home"
        >
          Home
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="address-card"
        >
          About
        </MenuButton>
      </VStack>
      {!userAuth || !userAuth.id ? (
        <MenuButton
          colorScheme="blue"
          active={true}
          onPress={handlePressLoginButton}
          icon="facebook-f"
        >
          Login with Facebook
        </MenuButton>
      ) : (
        <MenuButton
          colorScheme="blue"
          active={true}
          onPress={handlePressLogOutButton}
          icon="sign-out-alt"
        >
          Log out
        </MenuButton>
      )}
    </AnimatedColorBox>
  );
};

export default React.memo(Sidebar);
