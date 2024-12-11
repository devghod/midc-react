import { useState } from "react";
import { TodoForm } from "../../components";
import { Todo } from "../../types";

const CreateTodo = ({
  closeModal
} : {
  closeModal: () => void
}) => {

  const [form, setForm] = useState<Todo>({
    id: null,
    title: '',
    details: '',
    date: '',
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-4 space-y-4">
        <div className="text-lg font-bold text-slate-700">Create Todo</div>
        <div className="">
          <TodoForm 
            formType="create"
            form={form}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateTodo;