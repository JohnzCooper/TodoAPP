import React, { useState } from 'react'
import { Label, Input, Button } from '../../atoms'
import { addTodo } from '../../../api'

export type AddTodoProps = { 
  setTodos: (todos: ITodo[]) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({ setTodos }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {   
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value, })
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any): void => {
    e.preventDefault()    
    addTodo(formData)
        .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error("Error! Todo not saved")
            }
            setTodos(data.todos)
        })
        .catch(err => console.log(err))
  }

  return (
    <form data-test="addtodo-form" className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div className="mt-4">
        <div className="max-w-xs">
          <Label tailwindClass="text-blue" text="Name" />
        </div>
        <div className="w-full mt-4">
          <Input id='name' placeholder="Add Todo" onChange={handleForm} />
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-xs">
          <label className="text-blue"> Description </label>
        </div>
        <div className="w-full mt-4">
          <Input id='description' placeholder="Add Description" onChange={handleForm} />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button disabled={formData === undefined ? true: false} primary={true} label="Add Todo" type="submit" />
      </div>
    </form>
  )
}