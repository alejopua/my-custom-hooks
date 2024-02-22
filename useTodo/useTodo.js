import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
   return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {

   const [todos, dispatch] = useReducer( todoReducer, initialState, init );

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])

   const handleNewTodo = (newTodo) => {
      const action = {
         type: '[TODO] Add Todo',
         payload: newTodo
      }
      dispatch(action);
   }

   const handleDeleteTodo = (id) => {
      dispatch({
         type: '[TODO] Remove Todo',
         payload: id
      });
   }

   const handleToggleTodo = (id) => {
      dispatch({
         type: '[TODO] Toggle Todo',
         payload: id
      });
   }

   return {
      allTodos: todos.filter( todo => todo.done ).length,
      handleDeleteTodo,
      handleNewTodo,
      handleToggleTodo,
      pendingTodos: todos.filter( todo => !todo.done ).length,
      todos,
   }
}
