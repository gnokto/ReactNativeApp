import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import colors from '../config/colors';

function ListingDetailsScreenFirstGo(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.photo} source={require('../assets/jacket.jpg')} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.title}>Red Jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImageContainer} source={require('../assets/mosh.jpg')} />
                    <Text style={styles.name}>Ignacio Donovan</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 0.35,
    },
    mainContainer: {
        flex: 1
    },
    name: {
        fontSize: 16
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    textbox: {
        flex: 0.7,
        backgroundColor: colors.white,
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    price: {
        color: colors.secondary,
        fontSize: 16
    },
    profileContainer: {
        flexDirection: "row",
        // backgroundColor: colors.primary,
        paddingTop: 30,
        // justifyContent: "flex-start"

    },
    profileImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    }

})

export default ListingDetailsScreenFirstGo;