import { ThemeProvider } from '@emotion/react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, NativeBaseProvider, View } from 'native-base';
import { RootStackParamList } from './src/lib/interfaces';
import { nativeBaseTheme, theme } from './src/lib/theme';
import { HomeScreen } from './src/screens/home';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoorOutlinedIcon from './assets/icons/door-outlined.svg';
import DoorIcon from './assets/icons/door.svg';
import HomeOutlinedIcon from './assets/icons/home-outlined.svg';
import HomeIcon from './assets/icons/home.svg';
import InvoiceOutlinedIcon from './assets/icons/invoice-outlined.svg';
import InvoiceIcon from './assets/icons/invoice.svg';
import NotificationOutlinedIcon from './assets/icons/notification-outlined.svg';
import NotificationIcon from './assets/icons/notification.svg';
import UserOutlinedIcon from './assets/icons/user-outlined.svg';
import UserIcon from './assets/icons/user.svg';
import { InvoicesScreen } from './src/screens/invoices';
import { NotificationsScreen } from './src/screens/notifications';
import { ProductScreen } from './src/screens/products';
import { ProfileScreen } from './src/screens/profile';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const MENU_ICON_SIZE = 20;
const iconProps = { width: MENU_ICON_SIZE, height: MENU_ICON_SIZE };

const routeIcons: Record<string, { icon: any; iconSelected: any }> = {
  Home: { icon: <HomeOutlinedIcon {...iconProps} />, iconSelected: <HomeIcon {...iconProps} /> },
  Product: { icon: <DoorOutlinedIcon {...iconProps} />, iconSelected: <DoorIcon {...iconProps} /> },
  Invoices: {
    icon: <InvoiceOutlinedIcon {...iconProps} />,
    iconSelected: <InvoiceIcon {...iconProps} />,
  },
  Notifications: {
    icon: <NotificationOutlinedIcon {...iconProps} />,
    iconSelected: <NotificationIcon {...iconProps} />,
  },
  Profile: { icon: <UserOutlinedIcon {...iconProps} />, iconSelected: <UserIcon {...iconProps} /> },
};

export default function App() {
  return (
    <ActionSheetProvider>
      <ThemeProvider theme={theme}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                // contentStyle: { backgroundColor: 'white' },
                title: '',
                // headerTransparent: true,
                headerLeft: () => (
                  <View ml={4}>
                    <MaterialCommunityIcons name="home" size={24} />
                  </View>
                ),
                headerRight: () => (
                  <Button
                    mr={2}
                    variant="ghost"
                    rightIcon={
                      <MaterialCommunityIcons name="qrcode-scan" size={20} color="#FFCC00" />
                    }
                    colorScheme="black"
                  >
                    Abrir geladeira
                  </Button>
                ),
                tabBarIcon: ({ focused }) => {
                  const icon = routeIcons[route.name];
                  return focused ? icon.iconSelected : icon.icon;
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Product" component={ProductScreen} />
              <Tab.Screen name="Invoices" component={InvoicesScreen} />
              <Tab.Screen name="Notifications" component={NotificationsScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </ThemeProvider>
    </ActionSheetProvider>
  );
}
