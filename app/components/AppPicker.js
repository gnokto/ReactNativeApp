import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({
    icon,
    items,
    onSelectItem,
    placeholder,
    selectedItem,
    width = '100%'
}) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
                <View style={[styles.container, width = { width }]}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                            <AppText style={styles.placeholder}>{placeholder}</AppText>
                        )}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setIsModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium

    },
    text: {
        flex: 1,
    }
})
export default AppPicker;