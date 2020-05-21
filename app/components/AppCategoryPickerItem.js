import React from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from './Icon';
import AppText from './AppText';

function AppCategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <Icon
                name={item.icon}
                backgroundColor={item.backgroundColor}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})

export default AppCategoryPickerItem;