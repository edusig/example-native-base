import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Text } from 'native-base';
import { FC } from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { RootStackParamList } from '../lib/interfaces';

import QRCodeImage from '../../assets/scan-qrcode.svg';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FC<HomeScreenProps> = () => {
  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView>
      <Center px={6} h="100%" bg="white">
        <QRCodeImage width={280} height={258} />
        <Text fontSize="3xl" fontWeight="bold" pt={16}>
          Escaneie o QR Code
        </Text>
        <Text fontSize="md" color="#777" pb={6}>
          Para abrir a geladeira 2U basta apontar seu celular e escanear o QR da indicado porta
        </Text>
        <Button
          rightIcon={<MaterialCommunityIcons name="qrcode-scan" size={24} />}
          w="100%"
          size="lg"
        >
          Abrir geladeira
        </Button>
      </Center>
    </SafeAreaView>
  );
};
