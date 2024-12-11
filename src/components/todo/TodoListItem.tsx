import { memo, useState } from "react";
import { Todo } from "../../types";
import { TodoAlert } from "..";
import UpdateTodo from "../../features/todo/UpdateTodo";
import { EditIcon, TrashIcon } from "../../constants";

const TodoListItem = memo(({ 
  todo,
} : {
  todo: Todo
}) => {

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const onDelete = () => setOpenDelete(!openDelete);
  const onEdit = () => setOpenEdit(!openEdit);

  return (
    <>
    <div 
      className="w-96 border mx-3 my-4 rounded p-2 bg-white" 
      key={todo.id}
    >
      <div className="flex justify-between">
        <div className="text-slate-700 font-medium">
          {`${todo.id}. ${todo.title}`}
        </div>
        <div className="text-xs">
          <button
            className="text-green-500 hover:text-green-600 text-lg rounded-full hover:bg-gray-50 p-1"
            onClick={onEdit}
          >
            <EditIcon />
          </button>
          <button
            className="text-red-500 hover:text-red-600 text-lg rounded-full hover:bg-gray-50 p-1"
            onClick={() => onDelete()}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-xs text-slate-400">
          {todo.date}
        </div>
        <div className="text-slate-500 line-clamp-3 text-sm">
          {todo.details}
        </div>
      </div>
    </div>
    {openDelete && (
      <TodoAlert 
        title="Deletion"
        description="Confirm deletion"
        type="delete"
        data={todo}
        closeModal={() => onDelete()}
      />
    )}
    {openEdit && (
      <UpdateTodo  
        data={todo}
        closeModal={() => onEdit()}
      />
    )}
    </>
  )
})

export default TodoListItem;