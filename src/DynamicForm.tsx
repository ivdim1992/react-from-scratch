import React, { MouseEvent } from 'react';
import Field from './components/Field';
import Title from './components/Title';
import CheckBoxField from './components/Title';
import './DynamicForm.scss';
import { IField } from './interfaces/field.interface';

export class DynamicComponent extends React.Component<
    { formJSON: IField[] },
    {
        [x: string]: string | boolean;
    }
> {
    constructor(props: { formJSON: IField[] }) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            country: '',
            subscribe: false,
            email: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        });
    }

    handleSubmit(e: MouseEvent) {
        e.preventDefault();
        console.log(Array.of(JSON.stringify(this.state)));
    }

    render() {
        const emailField = {
            id: 'email',
            label: 'Email',
            required: true,
            placeholder: 'Email',
            type: 'text',
            value: '',
        };

        return (
            <form>
                <Title></Title>
                {this.props.formJSON.map((el) => {
                    return (
                        <Field
                            field={el}
                            key={el.id}
                            onChange={this.handleChange}
                        ></Field>
                    );
                })}

                {this.state.subscribe ? (
                    <Field
                        field={emailField}
                        onChange={this.handleChange}
                    ></Field>
                ) : null}

                <button
                    onClick={this.handleSubmit}
                    type="button"
                    className="btn btn-primary mt-3"
                    disabled={
                        !this.state.firstname ||
                        !this.state.lastname ||
                        (!this.state.email && this.state.subscribe === true)
                    }
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default DynamicComponent;
