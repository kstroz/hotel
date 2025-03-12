import { FC } from 'react';
import { LoaderProps } from './Loader.types';
import { COLORS } from '@theme/Colors';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { loaderStyles } from './Loader.styles';

const Loader: FC<LoaderProps> = ({ type = 'standard', ...rest }) => {
  if (type === 'fullscreen') {
    return (
      <View style={loaderStyles.root}>
        <ActivityIndicator size={68} color={COLORS.White} {...rest} />
        <Text variant="displayMedium" style={loaderStyles.text}>
          Hotel app
        </Text>
      </View>
    );
  }

  return <ActivityIndicator size={24} color={COLORS.Primary} {...rest} />;
};

export default Loader;
