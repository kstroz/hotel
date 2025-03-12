import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { pageWrapperStyles } from './PageWrapper.styles';

const PageWrapper: FC<ViewProps> = ({ children, style, ...rest }) => (
  <View style={[pageWrapperStyles.root, style]} {...rest}>
    {children}
  </View>
);

export default PageWrapper;
