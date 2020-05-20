import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="name" //required
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email" //required
                    placeholder="Email"
                    textContentType="emailAddress" // only works on ios to allow keychain login
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password" //required
                    placeholder="Password"
                    secureTextEntry // true by default
                    textContentType="password" // only works on ios to allow keychain access
                />
                <AppSubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default RegisterScreen;