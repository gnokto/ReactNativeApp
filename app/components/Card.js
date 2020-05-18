import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import colors from '../config/colors';

function Card(props) {
    return (
        <View style={styles.card}>
            <Image style={styles.photo} source={require('../assets/jacket.jpg')} />
            <View style={styles.textbox}>
                <Text style={styles.title}> Red Jacket for sale! </Text>
                <Text style={styles.price}>$100</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0.4,
        backgroundColor: '#f8f4f4',
        // backgroundColor: colors.primary,
        padding: 30,
        paddingTop: 80
    },
    photo: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15

    },
    textbox: {
        backgroundColor: colors.white,
        height: '20%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 20,
        height: '30%'
    },
    title: {

    },
    price: {
        color: colors.secondary
    }

})

export default Card;