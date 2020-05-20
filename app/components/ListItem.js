import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import defaultStyles from '../config/styles';


function ListItem({
    title,
    description,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    showChevrons = false
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {description && <AppText style={styles.description}>{description}</AppText>}
                    </View>
                    {showChevrons &&
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            color={defaultStyles.colors.medium}
                        />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    description: {
        color: colors.medium
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500"
    },
})
export default ListItem;