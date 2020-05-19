import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 4,
        title: 'T4',
        description: 'D4',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 5,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 6,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 7,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 8,
        title: 'T4',
        description: 'D4',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)} />
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>

    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;