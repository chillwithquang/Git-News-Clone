import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VStack, Divider } from 'native-base';
import __get from 'lodash/get';
import { RootState } from '@/Store';
import { fetchResource } from '@/Store/Resource';
import Header from '@/Components/Header';
import { ResourceService } from '@/Services/Resource';
import { showMessageError } from '@/Utils';
import ResourceList from '@/Components/ResourceList';

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
    <VStack>
      <Header />
      <Divider />
      <ResourceList />
    </VStack>
  );
};

export default HomeContainer;
