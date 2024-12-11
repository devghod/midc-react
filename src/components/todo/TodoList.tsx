import { useEffect, useMemo, useState } from "react";
import { TodoListItem } from "..";
import { useTodoStore } from "../../stores";
import { Todo } from "../../types";
import { CreateTodo } from "../../features";
import { AddIcon } from "../../constants";

const TodoList = () => {

  const { 
    todos, 
    isLoading, 
    getTodos,
  } = useTodoStore();

  const [openCreate, setOpenCreate] = useState(false);

  useEffect(() => 
    getTodos
  ,[]);

  const filterTodos = useMemo(() => 
    todos
  ,[todos]);

  const onCreate = () => setOpenCreate(!openCreate); 

  return (
    <>
    <div className="border shadow rounded-lg divide-y h-96 min-w-96">
      <div className="flex justify-between my-2 mx-3">
        <div className="text-slate-700 text-lg font-semibold">
          Todo List
        </div>
        <div className="">
          <button 
            className="text-blue-500 hover:text-blue-600 text-2xl"
            onClick={onCreate}
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[330px] bg-gray-50">
        {isLoading && (
          <div className="flex bg-slate-700/25 h-full items-center justify-center text-sm text-slate-500">Loading...</div>
        )}
        {filterTodos.length > 0 ? (
          filterTodos.map((todo: Todo) => (
            <TodoListItem 
              todo={todo} 
              key={todo.id} 
            />
          ))
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">No data</div>
        )}
      </div>
    </div>
    {openCreate && (
      <CreateTodo closeModal={onCreate} />
    )}
    </>
  )
}

export default TodoList;