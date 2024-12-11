import { TodoForm } from "../../components";
import { Todo } from "../../types";

const UpdateTodo = ({
  data,
  closeModal
} : {
  data: Todo
  closeModal: () => void
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-4 space-y-4">
        <div className="text-lg font-bold text-slate-700">Update Todo</div>
        <div className="">
          <TodoForm 
            formType="update"
            form={data}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateTodo;