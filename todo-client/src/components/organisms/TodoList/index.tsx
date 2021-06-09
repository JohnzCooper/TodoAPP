import React, { useEffect } from 'react'
import {Todo} from '../../molecules'
import { getTodos } from '../../../api'

export type TodoListProps = {
    todos: ITodo[]
    setTodos: (todos: ITodo[]) => void
} 
export const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) => {

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = (): void => {
        getTodos()
            .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
            .catch((err: Error) => console.log(err))
    }
    return (
        <div className="flex flex-col h-full scrollbar-thin scrollbar-thumb-gray-900 overflow-y-auto">
            {todos.map((todo: ITodo) => (
                <Todo
                    key={todo._id}
                    setTodos= {setTodos}
                    todo={todo}
                />
            ))}
        </div>
    )

}
