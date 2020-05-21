import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';
import PickerItem from '../PickerItem';



function AppFormPicker({
    items,
    name,
    numColumns,
    PickerItemComponent,
    placeholder,
    width
}) {
    const { errors, touched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numColumns={numColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;