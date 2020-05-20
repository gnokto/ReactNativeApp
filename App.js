import React, { useState } from 'react';
import { View, Text, Platform, TextInput, Switch } from 'react-native';
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
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {
  // const [category, setCategory] = useState(categories[1]);

  return (
    <ListingEditScreen />
    // <LoginScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>
    // <Screen>
    //   <Switch value={isNew} onValueChange={(newValue) => setIsnew(newValue)} />
    //   {/* on android the switch appears on the right corner on the screen */}
    // </Screen>

    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     clearButtonMode="always"
    //     onChangeText={text => setFirstName(text)}
    //     placeholder="First Name"
    //     style={{
    //       borderBottomColor: "#ccc",
    //       borderBottomWidth: 1,
    //     }}
    //   />
    // </Screen>
  );
  // return (
  //   <Screen>
  //     <ListItem
  //       title="My title"
  //       description="My description"
  //       ImageComponent={<Icon name="email" />}
  //     />
  //   </Screen>

  // );

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
  // return <ListingsScreen />;
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