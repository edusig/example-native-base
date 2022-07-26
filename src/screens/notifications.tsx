import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Icon, Image, Text, View } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';

export interface NotificationsScreenProps {}

export const NotificationsScreen: FC<NotificationsScreenProps> = () => {
  return (
    <SafeAreaView>
      <View h="100%" bg="white">
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          Notificações
        </Text>
        <FlatList
          data={[
            {
              title: 'Dobradinha',
              subtitle: 'Desconto em 20% na segunda unidade | Válido até 28/02',
              aside: '9:28 AM',
            },
            {
              title: 'Promo 20% OFF',
              subtitle: 'Desconto em 20% em todas as cervejas Ambev | Válido até 23/02',
              aside: '1d',
            },
            {
              title: '2 por 1',
              subtitle: 'Leve 2 Eisenbahn pelo preço 1| Válido até 14/01',
              aside: '3d',
            },
          ]}
          renderItem={(item) => (
            <View
              flexDirection="row"
              px={4}
              py={2}
              borderBottomColor="gray.200"
              borderBottomWidth={1}
              alignItems="center"
            >
              <Image
                source={require('../../assets/2u-logo-icon-bg.png')}
                width={45}
                height={45}
                borderRadius="100%"
                mr={2}
              />
              <View flex={1}>
                <Text fontSize="md">{item.item.title}</Text>
                <Text color="gray.600">{item.item.subtitle}</Text>
              </View>
              <View flexDirection="row" alignItems="center">
                <Text color="gray.500" fontWeight="600">
                  {item.item.aside}
                </Text>
                <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.300" />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
