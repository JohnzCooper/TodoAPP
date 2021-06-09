import { Response, Request } from "express"
import { ITodo } from "../../types/todo"
import Todo from "../../models/todo"
import logger from '../../logger'

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        logger.error({hint: "Controller Get Todo" , error})
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, "name" | "description" | "completed">

        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            completed: body.completed,
        })

        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo[] = await Todo.find()

        res.status(201).json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
        const errorObj = {hint: "Controller Add Todo" , error};
        logger.error(errorObj)
        res.status(400).json(errorObj)
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate( { _id: id }, body )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        const errorObj = {hint: "Controller Update Todo" , error}
        logger.error(errorObj)
        res.status(400).json(errorObj)
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove( req.params.id )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        })
    } catch (error) {
        const errorObj = {hint: "Controller Delete Todo" , error}
        logger.error(errorObj)
        res.status(400).json(errorObj)
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }