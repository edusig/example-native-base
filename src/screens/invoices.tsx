import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Icon, Text, View } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';

export interface InvoicesScreenProps {}

export const InvoicesScreen: FC<InvoicesScreenProps> = () => {
  return (
    <SafeAreaView>
      <View h="100%" bg="white">
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          Pedidos
        </Text>
        <FlatList
          data={[
            { title: '#3 - 5 itens', subtitle: 'Hoje - 16:55', price: 'R$ 11,37' },
            { title: '#2 - 2 itens', subtitle: 'Ontem - 16:55', price: 'R$ 59,90' },
            { title: '#1 - 2 itens', subtitle: '10/01/2021 - 16:55', price: 'R$ 59,90' },
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
              <View flex={1}>
                <Text fontSize="md">{item.item.title}</Text>
                <Text color="gray.600">{item.item.subtitle}</Text>
              </View>
              <View flexDirection="row" alignItems="center">
                <Text color="gray.500" fontWeight="600">
                  {item.item.price}
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
