import { Center, FlatList, Image, Select, Text, View } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { TabsHeader } from '../components/tabs-header';

export interface ProductScreenProps {}

export const ProductScreen: FC<ProductScreenProps> = () => {
  return (
    <SafeAreaView>
      <TabsHeader />
      <View h="100%">
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          Produtos
        </Text>
        <View px={4} mb={4}>
          <Select selectedValue="1" size="lg">
            <Select.Item label="Condominio Residencial X" value="1" />
            <Select.Item label="Condominio Residencial Y" value="2" />
            <Select.Item label="Condominio Residencial Z" value="3" />
          </Select>
        </View>
        <FlatList
          numColumns={2}
          data={[
            {
              name: 'Heineken Lata',
              price: 'R$ X,XX',
              unit: '000ml',
              onSale: true,
              image: 'https://www.placecage.com/200/200',
            },
            {
              name: 'Stella Artois',
              price: 'R$ X,XX',
              unit: '000ml',
              onSale: true,
              image: 'https://www.placecage.com/201/201',
            },
            {
              name: 'Eisenbahn',
              price: 'R$ X,XX',
              unit: '000ml',
              onSale: false,
              image: 'https://www.placecage.com/202/202',
            },
            {
              name: 'Duplo Malte Lata',
              price: 'R$ X,XX',
              unit: '000ml',
              onSale: false,
              image: 'https://www.placecage.com/203/203',
            },
          ]}
          renderItem={({ item }) => (
            <Center bg="gray.100" borderRadius={24} flex={1} m={1} p={4}>
              <View mb={2}>
                <Image source={{ uri: item.image }} width={150} height={150} />
                <View
                  bg="gray.200"
                  position="absolute"
                  bottom={0}
                  right={0}
                  borderRadius={10}
                  px={2}
                >
                  <Text fontSize="xs">{item.unit}</Text>
                </View>
                {item.onSale && (
                  <View
                    bg="green.500"
                    position="absolute"
                    top={0}
                    left={0}
                    borderRadius={10}
                    px={2}
                    py={0.5}
                  >
                    <Text fontSize="xs" color="white" fontWeight="bold">
                      Promoção
                    </Text>
                  </View>
                )}
              </View>
              <Text>{item.name}</Text>
              <Text fontSize="xl" fontWeight="600">
                {item.price}
              </Text>
            </Center>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
