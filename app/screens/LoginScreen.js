import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            onChangeText={handleChange("email")}
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress" // only works on ios to allow keychain login
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry // true by default
                            textContentType="password" // only works on ios to allow keychain access
                        />
                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
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