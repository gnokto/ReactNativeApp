import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red jacket for salescscscaacsasccacascasc sdhisahdihsdihasd sdihsidh oishdio saiod iosadasoidhioasd",
        price: 10000000008983784973984739873897487374823748748973847287823748724,
        image: require('../assets/jacket.jpg')


    },
    {
        id: 2,
        title: "Red jacket for sale",
        price: 500,
        image: require('../assets/jacket.jpg')

    },
    // {
    //     id: 3,
    //     title: "Red jacket for sale",
    //     price: 700,
    //     image: require('../assets/jacket.jpg')

    // }
]

function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light

    }
})

export default ListingsScreen;