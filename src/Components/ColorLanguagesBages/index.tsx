import React from 'react';
import { Box, useTheme } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ColorLanguagesBagdeProps {
  language: string;
}

const ColorLanguagesBagde = (props: ColorLanguagesBagdeProps) => {
  const { language } = props;

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
    default:
      colorLanguage = colors.gray['400'];
      break;
  }

  return (
    <Box>
      {language && <Icon name="circle" color={colorLanguage} {...props} />}
    </Box>
  );
};

export default ColorLanguagesBagde;
