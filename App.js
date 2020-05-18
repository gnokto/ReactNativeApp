import React from 'react';
import { View, Text, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText'

export default function App() {
  // return <WelcomeScreen />
  // return <ViewImageScreen />
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <AppText>
        I love React Native! this is my first react text. Here is some more text</AppText>
      <MaterialCommunityIcons name='email' size={60} />
    </View>
  );
}