import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, AppForm, AppSubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.string().nullable().label("Category"),
})

const categories = [
    { label: "Furniture", value: 1, icon: 'floor-lamp', backgroundColor: '#fc5c65' },
    { label: "Cars", value: 2, icon: 'car', backgroundColor: '#fd9644' },
    { label: "Cameras", value: 3, icon: 'camera', backgroundColor: '#fed330' },
    { label: "Games", value: 4, icon: 'cards', backgroundColor: '#26de81' },
    { label: "Clothing", value: 5, icon: 'shoe-heel', backgroundColor: '#2bcbba' },
    { label: "Sports", value: 6, icon: 'basketball', backgroundColor: '#45aaf2' },
    { label: "Movies & Music", value: 7, icon: 'headphones', backgroundColor: '#4b7bec' },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={'40%'}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numColumns={3}
                    PickerItemComponent={AppCategoryPickerItem}
                    placeholder="Category"
                    width={'60%'}
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    placeholder="Description"
                />
                <AppSubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
export default ListingEditScreen;