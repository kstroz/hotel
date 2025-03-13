import { HotelCard } from '@components/HotelCard';
import { PageWrapper } from '@components/PageWrapper';
import { useHomeNavigation, useHomeRoute } from '@navigation/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  Card,
  Portal,
  SegmentedButtons,
  Snackbar,
  Text,
} from 'react-native-paper';
import { hotelDetailsStyles } from './HotelDetails.styles';
import Clipboard from '@react-native-clipboard/clipboard';
import { View } from 'react-native';
import VerticalDivider from '@components/VerticalDivider';

export const HotelDetails = () => {
  const nav = useHomeNavigation();
  const route = useHomeRoute();
  const { hotel } = route.params ?? {};
  const {
    name,
    contact: { phoneNumber, email },
    checkIn,
    checkOut,
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
        <Card.Content style={hotelDetailsStyles.checkWrapper}>
          <View style={hotelDetailsStyles.labels}>
            <Text variant="titleMedium">Check-in</Text>
            <Text variant="labelMedium">{`${checkIn.from} - ${checkIn.to}`}</Text>
          </View>
          <VerticalDivider />
          <View style={hotelDetailsStyles.labels}>
            <Text variant="titleMedium">Check-out</Text>
            <Text variant="labelMedium">{`${checkOut.from} - ${checkOut.to}`}</Text>
          </View>
        </Card.Content>
      </Card>
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
