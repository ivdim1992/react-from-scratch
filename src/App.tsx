import React from 'react';
import './app.scss';
import DynamicForm from './DynamicForm';
import { formJSON } from './form';

function App() {
    return <DynamicForm formJSON={formJSON[0].fields}></DynamicForm>;
}

export default App;
