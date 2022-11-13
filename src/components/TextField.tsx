import React, { ChangeEventHandler } from 'react';
import { IField } from '../interfaces/field.interface';

function TextField(props: { field: IField; onChange: ChangeEventHandler }) {
    return (
        <>
            <div className="col-auto">
                <label className="col-form-label" htmlFor={props.field.id}>
                    {props.field.required ? (
                        <span className="required-star mr-2">*</span>
                    ) : (
                        ''
                    )}
                    {props.field.label}
                </label>
            </div>
            <div className="col-auto">
                <input
                    id={props.field.id}
                    required={props.field.required}
                    type={props.field.type}
                    onChange={props.onChange}
                    defaultValue={props.field.value}
                    className="form-control"
                    name={props.field.id}
                />
            </div>
            {}
        </>
    );
}

export default TextField;
