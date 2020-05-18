import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert } from 'react-native';

import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton} >
                <Button title="Login" color={colors.white} onPress={() => Alert.alert("Login button")} />
            </View>
            <View style={styles.registerButton}>
                <Button title="Register" color={colors.white} onPress={() => Alert.alert("Register button")} />
            </View>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '90%',
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 40,
        // position: "absolute"
        marginBottom: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"

    },
    registerButton: {
        width: '90%',
        height: 50,
        backgroundColor: colors.secondary,
        borderRadius: 40,
        // position: "absolute",
        marginBottom: 30
    }

})
export default WelcomeScreen;