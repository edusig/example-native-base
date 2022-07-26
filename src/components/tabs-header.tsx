import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, View } from 'native-base';
import { FC } from 'react';

export const TabsHeader: FC = () => {
  return (
    <View px={2} flexDirection="row" justifyContent="space-between" alignItems="center" bg="white">
      <View ml={2}>
        <MaterialCommunityIcons name="home" size={24} />
      </View>
      <Button
        variant="ghost"
        rightIcon={<MaterialCommunityIcons name="qrcode-scan" size={20} color="#FFCC00" />}
        colorScheme="black"
      >
        Abrir geladeira
      </Button>
    </View>
  );
};
