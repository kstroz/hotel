import { useColorScheme, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SectionProps } from './Section.types';
import { SectionStyles } from './Section.styles';
import { FC } from 'react';

const Section: FC<SectionProps> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={SectionStyles.sectionContainer}>
      <Text
        style={[
          SectionStyles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          SectionStyles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
