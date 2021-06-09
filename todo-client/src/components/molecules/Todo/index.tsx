import React from 'react'
import { updateTodo, deleteTodo } from '../../../api'
import {Button} from '../../atoms'

export type TodoProps = {
    todo : ITodo
    setTodos: (todos: ITodo[]) => void
}

export const Todo: React.FC<TodoProps> = ({ todo, setTodos }) => {
    const checkTodo: string = todo.completed ? `line-through` : ''

    const handleUpdateTodo = (todo: ITodo): void => {
        updateTodo(todo)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error("Error! Todo not updated")
                }
                setTodos(data.todos)
            })
            .catch(err => console.log(err))
    }

    const handleDeleteTodo = (_id: string): void => {
        deleteTodo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error("Error! Todo not deleted")
                }
                setTodos(data.todos)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-4">
            <div className="block">
                <h1 className={`text-blue text-2xl font-bold ${checkTodo}`}>{todo.name}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <div className="flex justify-end mt-4">
                {/* <button className={`${todo.status ? 'hidden' : 'flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-green text-white hover:text-white hover:bg-green-light'}`} 
                onClick={() => handleUpdateTodo(todo)}>Complete</button> */}
                <Button primary={true} label="Complete" display = {todo.completed ? false : true} onClick={() => handleUpdateTodo(todo)} />
                {/* <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-red text-white hover:text-white hover:bg-red-light"
                onClick={() => handleDeleteTodo(todo._id)}>Delete</button> */}
                <Button primary={false} label="Delete" onClick={() => handleDeleteTodo(todo._id)} />
            </div>
            <hr className="mt-4" />
        </div>
    )
}