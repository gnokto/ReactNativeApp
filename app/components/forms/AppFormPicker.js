import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';
import AppCategoryPickerItem from '../AppCategoryPickerItem';

function AppFormPicker({
    items,
    name,
    placeholder,
    width
}) {
    const { errors, touched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={AppCategoryPickerItem}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;