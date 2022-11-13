import React, { ChangeEventHandler } from 'react';
import { IField } from '../interfaces/field.interface';

function CheckBoxField(props: { field: IField; onChange: ChangeEventHandler }) {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-auto">
                    <label className="col-form-label" htmlFor={props.field.id}>
                        {props.field.label}
                    </label>
                </div>
                <div className="input-group w-auto">
                    <input
                        id={props.field.id}
                        required={props.field.required}
                        type={props.field.type}
                        onChange={props.onChange}
                        defaultValue={props.field.value}
                        name={props.field.id}
                        className="form-check-input mt-0"
                    />
                </div>
            </div>
        </>
    );
}

export default CheckBoxField;
