import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Icon, Pressable, Text, View } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { TabsHeader } from '../components/tabs-header';

type ProfileScreenProps = NativeStackScreenProps<any, 'Profile'>;

export const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TabsHeader />
      <View h="100%">
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          Perfil
        </Text>
        <FlatList
          data={[
            {
              title: 'Natasha Henderson',
              subtitle: 'Editar perfil',
              icon: 'account',
              route: 'ProfileEdit',
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
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                if (item.route != null) {
                  navigation.navigate(item.route);
                }
              }}
            >
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
                  name={item.icon}
                  size={6}
                  color="gray.500"
                  mr={2}
                />
                <View flex={1}>
                  <Text fontSize="md">{item.title}</Text>
                  <Text color="gray.600">{item.subtitle}</Text>
                </View>
                <View flexDirection="row" alignItems="center">
                  <Icon
                    as={MaterialCommunityIcons}
                    name="chevron-right"
                    size={6}
                    color="gray.300"
                  />
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
