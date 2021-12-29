import React from 'react';
import { IImageProps } from 'native-base';
import FastImage from 'react-native-fast-image';
import { makeStyledComponent } from '@/Utils/styled';

const StyledImage = makeStyledComponent(FastImage);

interface Props extends IImageProps {}

const Image = ({ ...props }: Props) => {
  return <StyledImage {...props} />;
};

export default React.memo(Image);
