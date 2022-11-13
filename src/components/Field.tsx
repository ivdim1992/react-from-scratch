import React, { ChangeEventHandler } from 'react';
import { IField, IFieldSelect } from '../interfaces/field.interface';
import CheckBoxField from './CheckboxField';
import SelectField from './SelectField';
import TextField from './TextField';

function Field(props: { field: IField; onChange: ChangeEventHandler }) {
    return (
        <>
            {(() => {
                switch (props.field.type) {
                    case 'text':
                        return (
                            <TextField
                                field={props.field}
                                onChange={props.onChange}
                            ></TextField>
                        );
                    case 'select':
                        return (
                            <SelectField
                                field={props.field as IFieldSelect}
                                onChange={props.onChange}
                            ></SelectField>
                        );
                    case 'checkbox':
                        return (
                            <CheckBoxField
                                field={props.field}
                                onChange={props.onChange}
                            ></CheckBoxField>
                        );
                    default:
                        return (
                            <TextField
                                field={props.field}
                                onChange={props.onChange}
                            ></TextField>
                        );
                }
            })()}
        </>
    );
}

export default Field;
