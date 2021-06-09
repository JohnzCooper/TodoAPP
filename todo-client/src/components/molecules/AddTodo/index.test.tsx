import { fireEvent } from '@testing-library/react';
import React , { useState } from 'react';
import axios, { AxiosResponse } from "axios"
import * as ReactDom from 'react-dom';
import { AddTodo } from './index';
import * as APIFuncs  from '../../../api'

describe('AdddTodo Component Test', () => {
    let container: HTMLElement
    let setTodos: (todos: ITodo[]) => void
    // const [todos, setTodos] = useState<ITodo[]>([ 
    //     {_id: '1', name: 'Test Todo Name 1' , description: 'Test Todo Description 1', completed: false},
    //     {_id: '2', name: 'Test Todo Name 2' , description: 'Test Todo Description 2', completed: false},
    //     {_id: '3', name: 'Test Todo Name 3' , description: 'Test Todo Description 3', completed: true},
    // ])  

    const addTodoServiceSpy = jest.fn().mockImplementation( ( {name, description} ) => { message: "Todo added";
        status: 200;});
    //const addTodoServiceSpy = jest.fn(( obj ) => { return  obj});

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<AddTodo setTodos={setTodos} />, container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly AddTodo component - Form Element', ()=> {
        expect(container.querySelector("[data-test='addtodo-form']")).toBeInTheDocument();
    })

    it('Renders correctly AddTodo component - Input Elements', ()=> {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);
        expect(inputs[0].id).toBe('name');
        expect(inputs[1].id).toBe('description');

        const buttons = container.querySelectorAll('button');
        expect(buttons).toHaveLength(1);
    })

    it('Renders correctly AddTodo component - Button Elements', ()=> {
        const buttons = container.querySelectorAll('button');
        expect(buttons).toHaveLength(1);
    })

    it('Add Toto Button Press', ()=> {
        const inputs = container.querySelectorAll('input');
        const button = container.querySelectorAll('button');
        const nameInput = inputs[0];
        const descriptionInput = inputs[1];
        const addTodoButton = button[0];

        fireEvent.change(nameInput, {target: {id: 'name', value: 'Test Todo Name'}});
        fireEvent.change(descriptionInput, {target: {id: 'description', value: 'Test Todo Description'}});
        fireEvent.click(addTodoButton)
        expect(addTodoServiceSpy).toBeCalled(); //
    })
})