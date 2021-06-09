
import React from 'react';
import { AddTodo } from '../../molecules'
import { Header, TodoList } from '../../organisms'

export type TodoTemplateProps = {
    headerTitle: string;
    description?: string;
    todos: ITodo[]
    setTodos: (todos: ITodo[]) => void
}

export const TodoTemplate: React.FC<TodoTemplateProps> = ({ headerTitle, description, todos, setTodos }) => {
    return (
        <div data-test="TodoTemplate" className="bg-white overflow-hidden rounded shadow p-6 m-4 w-full lg:w-1/2 lg:max-w-lg">
            <Header titleText={headerTitle} description={description} />
            <AddTodo setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}