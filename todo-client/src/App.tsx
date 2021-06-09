import React, { useState } from 'react'
import { TodoTemplate } from './components/templates'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]) //Initial todos as empty array

    return (
        <main className="flex h-screen overflow-hidden justify-center dark:bg-gray-800">
            <TodoTemplate headerTitle="My To Do List" description="With React and TailwindCSS" todos={todos} setTodos={setTodos} />
        </main>
    )

}

export default App
