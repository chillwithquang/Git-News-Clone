import React from 'react';
import { Box, useTheme, HStack, IBoxProps } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface FooterItemInfoProps extends IBoxProps {
  nameIcon?: string;
  colorIcon?: string;
  language?: string;
  children?: React.ReactNode;
}

const FooterItemInfo = (props: FooterItemInfoProps) => {
  const { nameIcon, colorIcon, language, children } = props;
  const { colors } = useTheme();

  let colorLanguage: string;

  switch (language) {
    case 'JavaScript':
      colorLanguage = colors.yellow['400'];
      break;
    case 'Python':
      colorLanguage = colors.darkBlue['400'];
      break;
    case 'Java':
      colorLanguage = colors.yellow['800'];
      break;
    case 'Go':
      colorLanguage = colors.lightBlue['300'];
      break;
    case 'PowerShell':
      colorLanguage = colors.darkBlue['900'];
      break;
    default:
      colorLanguage = colors.gray['400'];
      break;
  }

  return (
    <Box {...props}>
      <HStack alignItems="center">
        {language ? (
          <Icon name="circle" solid color={colorLanguage} />
        ) : (
          <Icon name={nameIcon} solid color={colorIcon} />
        )}
        {children}
      </HStack>
    </Box>
  );
};

export default FooterItemInfo;
