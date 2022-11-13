import React, { ChangeEventHandler } from 'react';
import { IFieldSelect } from '../interfaces/field.interface';

function SelectField(props: {
    field: IFieldSelect;
    onChange: ChangeEventHandler;
}) {
    return (
        <>
            <label htmlFor={props.field.id}></label>
            <select
                id={props.field.id}
                required={props.field.required}
                className="form-select"
                onChange={props.onChange}
                name={props.field.id}
            >
                {props.field.options.map((option) => {
                    return (
                        <option value={option.label} key={option.label}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export default SelectField;
