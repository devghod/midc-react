import { create } from 'zustand';
import { Todo } from '../types';
import { debounce } from '../utils';
import { todos } from '../constants';

type TState = {
  todos: Todo[]
  isLoading: boolean
}

type TAction = {
  getTodos: () => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: number) => void
  updateTodo: (updateTodo: Todo) => void
}

export const useTodoStore = create<TState & TAction>((set, get) => ({
  todos: [],
  isLoading: false,

  getTodos: async () => {
    set({ isLoading: true });
  
    await debounce(() => console.log('Add todo'), 3000);

    set({ 
      todos: todos, 
      isLoading: false
    });
  },

  addTodo: async (data: Todo) => {
    set({ isLoading: true });
  
    await debounce(() => console.log('Add todo'), 3000);
    
    let len = get().todos.length;
    let newId = len || 0;
    let newData = data;
    newData.id = newId;

    set({ 
      todos: [...get().todos, newData], 
      isLoading: false
    });
  },

  deleteTodo: async (id: number) => {
    set({ isLoading: true });
  
    await debounce(() => console.log('Delete todo'), 3000);
    
    const todos = get().todos;
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);

    set({ 
      todos: newTodos,
      isLoading: false
    });
  },

  updateTodo: async (updateTodo: Todo) => {
    set({ isLoading: true });
  
    await debounce(() => console.log('Update todo'), 3000);

    const todos = get().todos;
    const updatedTodos = todos.map((todo: Todo) =>
      todo.id === updateTodo.id ? { ...todo, ...updateTodo } : todo
    );

    set({ 
      todos: updatedTodos,
      isLoading: false
    });
  },

}))
