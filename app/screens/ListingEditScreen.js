import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, AppForm, AppSubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.string().nullable().label("Category"),
})

const categories = [
    { label: "Furniture", value: 1, icon: 'floor-lamp', bacgroundColor: '#fc5c65' },
    { label: "Cars", value: 2, icon: 'car', bacgroundColor: '#fd9644' },
    { label: "Cameras", value: 3, icon: 'camera', bacgroundColor: '#fed330' },
    { label: "Games", value: 4, icon: 'cards', bacgroundColor: '#26de81' },
    { label: "Clothing", value: 5, icon: 'shoe-heel', bacgroundColor: '#2bcbba' },
    { label: "Sports", value: 6, icon: 'basketball', bacgroundColor: '#45aaf2' },
    { label: "Movies & Music", value: 7, icon: 'headphones', bacgroundColor: '#4b7bec' },
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