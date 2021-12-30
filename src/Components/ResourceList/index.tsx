import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, View } from 'moti';
import {
  PanGestureHandlerProps,
  ScrollView,
} from 'react-native-gesture-handler';
import { RootState } from '@/Store';
import { deleteResourceItem } from '@/Store/Resource';
import { makeStyledComponent } from '@/Utils/styled';
import ResourceItem, { ResourceItemType } from '@/Components/ResourceItem';
import { MainNavigatorParamsList } from '@/types';
import { useColorModeValue } from 'native-base';

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export interface ResourceListProps {
  onPressItem: (item: ResourceItemType) => void;
  onRemoveItem: (item: ResourceItemType) => void;
}
export interface ResourceItemProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  data: ResourceItemType;
  onPressItem: (item: ResourceItemType) => void;
  onRemoveItem: (item: ResourceItemType) => void;
}

const AnimatedResourceItem = (props: ResourceItemProps) => {
  const { simultaneousHandlers, data, onPressItem, onRemoveItem } = props;

  const handlePressItem = useCallback(() => {
    onPressItem(data);
  }, [data, onPressItem]);

  const handleRemoveItem = useCallback(() => {
    onRemoveItem(data);
  }, [data, onRemoveItem]);

  return (
    <StyledView
      w="full"
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <ResourceItem
        simultaneousHandlers={simultaneousHandlers}
        data={data}
        onPressItem={handlePressItem}
        onRemoveItem={handleRemoveItem}
      />
    </StyledView>
  );
};

const ResourceList = () => {
  const sourceData: ResourceItemType[] = useSelector<RootState>(
    state => state.resource.sourceData,
  ) as ResourceItemType[];

  const navigation =
    useNavigation<StackNavigationProp<MainNavigatorParamsList>>();
  const dispatch = useDispatch();

  const refScrollView = useRef(null);

  const handlePressItem = (item: ResourceItemType) => {
    // TODO
    return navigation.navigate('WebView', {
      uri: item.original_url,
    });
  };

  const handleRemoveItem = (item: ResourceItemType) => {
    dispatch(deleteResourceItem({ resourceItem: item }));
  };
  return (
    <StyledScrollView
      ref={refScrollView}
      w="full"
      flex={1}
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      bg={useColorModeValue('warmGray.900', 'primary.50')}
    >
      <AnimatePresence>
        {sourceData &&
          sourceData.map((item: ResourceItemType) => (
            <AnimatedResourceItem
              key={item.original_url}
              data={item}
              simultaneousHandlers={refScrollView}
              onPressItem={handlePressItem}
              onRemoveItem={handleRemoveItem}
            />
          ))}
      </AnimatePresence>
    </StyledScrollView>
  );
};

export default ResourceList;
