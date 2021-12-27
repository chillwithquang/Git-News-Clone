import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VStack, Divider, useColorModeValue } from 'native-base';
import __get from 'lodash/get';
import { RootState } from '@/Store';
import { fetchResource } from '@/Store/Resource';
import Navbar from '@/Components/Navbar';
import { ResourceService } from '@/Services/Resource';
import { showMessageError } from '@/Utils';
import ResourceList from '@/Components/ResourceList';
import AnimatedColorBox from '@/Components/AnimatedColorBox';
import MastHead from '@/Components/MastHead';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { language, since } = useSelector((state: RootState) => state.resource);

  const getListSource = useCallback(async () => {
    try {
      const res = await ResourceService.getDataGithub(language, since);
      const sourceData = __get(res, 'data', []);

      dispatch(fetchResource({ sourceData }));
    } catch (error) {
      showMessageError(error);
    }
  }, [language, since, dispatch]);

  useEffect(() => {
    getListSource();
  }, [getListSource]);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.900', 'primary.900')}
      w="full"
    >
      <MastHead
        title="Github"
        image={require('../../Assets/github-social.png')}
      >
        <Navbar />
      </MastHead>
      <VStack
        flex={1}
        bg={useColorModeValue('warmGray.900', 'darkBlue.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
      >
        <ResourceList />
      </VStack>
    </AnimatedColorBox>
  );
};

export default HomeContainer;
