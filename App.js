import React from 'react';
import { View, Text, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import AppText from './app/components/AppText'
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AppButton from './app/components/AppButton';
import ListItem from './app/components/ListItem';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import colors from './app/config/colors';

export default function App() {
  return (
    <Screen>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      />
    </Screen>

  );

  // return (
  //   <View style={{
  //     backgroundColor: "#f8f4f4",
  //     padding: 20,
  //     paddingTop: 100,
  //   }}>
  //     <Card
  //       title="Red jacket for sale"
  //       subTitle="$100"
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
  // );
  // return <ListingDetailsScreen />
  // return <Card />
  // return <MyAccountScreen />;
  // return <MessagesScreen />;
  // return <WelcomeScreen />;
  // return <ViewImageScreen />
  // return (
  //   <View style={{
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center"
  //   }}
  //   >
  //     <AppText>
  //       I love React Native! this is my first react text. Here is some more text</AppText>
  //     <MaterialCommunityIcons name='email' size={60} />
  //   </View>
  // );
}