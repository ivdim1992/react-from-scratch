export interface IField {
    id: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    type: string;
    value: string;
}

export interface IFieldSelect extends IField {
    options: IOption[];
}

interface IOption {
    label: string;
}
