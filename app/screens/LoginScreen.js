import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress" // only works on ios to allow keychain login
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry // true by default
                textContentType="password" // only works on ios to allow keychain access
            />
            <AppButton
                title="Login"
                onPress={() => console.log(email, password)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;