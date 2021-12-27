import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  useTheme,
  Pressable,
  useColorModeValue,
} from 'native-base';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterItemInfo from '@/Components/FooterItemInfo';
import SwipableView from '@/Components/SwipableView';

export interface ResourceItemType {
  name: string;
  description: string;
  programmingLanguage: string;
  stars: string;
  forks: string;
  owner: string;
  original_url: string;
}

export interface Props
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  data: ResourceItemType;
  onPressItem: () => void;
  onRemoveItem: () => void;
}

const ResourceItem = (props: Props) => {
  const { data, simultaneousHandlers, onPressItem, onRemoveItem } = props;
  const { colors } = useTheme();

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemoveItem}
      backView={
        <Box
          w="full"
          height="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr="4"
        >
          <Icon name="trash" />
        </Box>
      }
    >
      <Pressable onPress={onPressItem}>
        <Box
          w="full"
          px="2"
          py="1"
          bg={useColorModeValue('dark.50', 'primary.50')}
        >
          {data && (
            <VStack w="full">
              <Box>
                <HStack alignItems="center">
                  <Icon name="empire" size={16} color={colors.gray['400']} />
                  <Text ml={2} color="darkBlue.500">
                    {data.owner}
                  </Text>
                  <Text color="darkBlue.400" bold>
                    /{data.name}
                  </Text>
                </HStack>
              </Box>
              <Text color="gray.300">{data.description}</Text>
              <Box>
                <HStack alignItems="center">
                  <FooterItemInfo mr="4" language={data.programmingLanguage}>
                    <Text mx={2} color="gray.500">
                      {data.programmingLanguage}
                    </Text>
                  </FooterItemInfo>
                  <FooterItemInfo
                    mr="4"
                    nameIcon="star"
                    colorIcon={colors.gray['500']}
                  >
                    <Text mx={2} color="gray.500">
                      {data.stars} stars
                    </Text>
                  </FooterItemInfo>
                  <FooterItemInfo
                    nameIcon="code-branch"
                    colorIcon={colors.gray['500']}
                  >
                    <Text mx={2} color="gray.500">
                      {data.forks} forks
                    </Text>
                  </FooterItemInfo>
                </HStack>
              </Box>
              <Divider />
            </VStack>
          )}
        </Box>
      </Pressable>
    </SwipableView>
  );
};

export default ResourceItem;
