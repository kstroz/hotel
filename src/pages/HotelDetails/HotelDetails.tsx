import { HotelCard } from '@components/HotelCard';
import { PageWrapper } from '@components/PageWrapper';
import { useHomeNavigation, useHomeRoute } from '@navigation/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  Card,
  Icon,
  Portal,
  SegmentedButtons,
  Snackbar,
} from 'react-native-paper';
import { hotelDetailsStyles } from './HotelDetails.styles';
import Clipboard from '@react-native-clipboard/clipboard';

export const HotelDetails = () => {
  const nav = useHomeNavigation();
  const route = useHomeRoute();
  const { hotel } = route.params ?? {};
  const {
    name,
    contact: { phoneNumber, email },
  } = hotel!;

  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerTitle: name,
      });
    }, [name, nav]),
  );

  return (
    <PageWrapper style={hotelDetailsStyles.root}>
      <HotelCard hotel={hotel!} />
      <Card elevation={4}>
        <Card.Content>
          <SegmentedButtons
            // Don't set the value it looks more natural this way
            value={''}
            onValueChange={() => void 0}
            density="medium"
            buttons={[
              {
                icon: 'cellphone',
                value: 'phone',
                label: 'Phone',
                disabled: visible,
                onPress: () => {
                  Clipboard.setString(phoneNumber);
                  setVisible(true);
                },
              },
              {
                icon: 'email',
                value: 'email',
                label: 'Email',
                disabled: visible,
                onPress: () => {
                  Clipboard.setString(email);
                  setVisible(true);
                },
              },
            ]}
          />
        </Card.Content>
      </Card>
      <Portal>
        <Snackbar
          duration={1000}
          visible={visible}
          style={hotelDetailsStyles.snackbar}
          wrapperStyle={hotelDetailsStyles.snackbarWrapper}
          onDismiss={() => setVisible(false)}>
          Copied to clipboard!
        </Snackbar>
      </Portal>
    </PageWrapper>
  );
};
