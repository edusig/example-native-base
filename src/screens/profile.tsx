import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Icon, Text, View } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';

export interface ProfileScreenProps {}

export const ProfileScreen: FC<ProfileScreenProps> = () => {
  return (
    <SafeAreaView>
      <View h="100%" bg="white">
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          Perfil
        </Text>
        <FlatList
          data={[
            {
              title: 'Natasha Henderson',
              subtitle: 'Editar perfil',
              icon: 'account',
            },
            {
              title: 'Cupons',
              subtitle: 'Disponíveis e histórico',
              icon: 'tag',
            },
            {
              title: 'Métodos de pagamento',
              subtitle: 'Mastercard **** 9876',
              icon: 'credit-card',
            },
            {
              title: 'Ajuda',
              subtitle: 'Suporte e ajuda ao usuário',
              icon: 'help-circle-outline',
            },
            {
              title: 'Configurações',
              subtitle: 'Notificações, Privacidade',
              icon: 'cog',
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
              <Icon
                as={MaterialCommunityIcons}
                name={item.item.icon}
                size={6}
                color="gray.500"
                mr={2}
              />
              <View flex={1}>
                <Text fontSize="md">{item.item.title}</Text>
                <Text color="gray.600">{item.item.subtitle}</Text>
              </View>
              <View flexDirection="row" alignItems="center">
                <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.300" />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
