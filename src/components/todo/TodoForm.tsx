import { useState } from "react";
import { Todo } from "../../types";
import { useTodoStore } from "../../stores";
import { dateFormat } from "../../utils";

const TodoForm = ({
  form,
  formType,
  closeModal
} : { 
  form: Todo
  formType: string
  closeModal: () => void
}) => {

  const { addTodo, updateTodo, isLoading } = useTodoStore();
  const [newForm, setNewForm] = useState<Todo>(form);

  const handleChange = (event: any) => {
    event.preventDefault();
    const { id, value } = event.target;
    setNewForm({ ...newForm, [id]: value });
  }

  const submit = () => {
    if (newForm.id === null) {
      addTodo(newForm);
    } else {
      updateTodo(newForm);
    }
    
    setTimeout(() => closeModal(),2000);
  }

  return (
    <div className="space-y-6">
      <div className="px-2 space-y-4">

        <div className="grid grid-cols-8">
          <label 
            htmlFor="title" 
            className="col-span-2 text-slate-500"
          >Title</label>
          <input 
            id="title"
            name="title"
            type="text" 
            className="col-span-6 border w-full px-2 py-1 rounded font-medium text-slate-700" 
            placeholder="" 
            value={newForm.title}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="grid grid-cols-8">
          <label 
            htmlFor="details" 
            className="col-span-2 text-slate-500"
          >Details</label>
          <textarea 
            name="details" 
            id="details"
            className="col-span-6 border w-full px-2 py-1 rounded font-medium text-slate-700"
            value={newForm.details}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div className="grid grid-cols-8">
          <label 
            htmlFor="date" 
            className="col-span-2 text-slate-500"
          >Date</label>
          <input 
            id="date"
            name="date"
            type="date" 
            className="col-span-6 border w-full px-2 py-1 rounded font-medium text-slate-700" 
            placeholder="" 
            value={dateFormat(newForm.date, 'yyyy-MM-DD')}
            onChange={(e) => handleChange(e)}
          />
        </div>

      </div>

      <div className="space-x-2">
        <button
          className={` text-white px-4 py-2 rounded capitalize
            ${formType === 'create' && 'bg-blue-500 hover:bg-blue-600'}
            ${formType === 'update' && 'bg-green-500 hover:bg-green-600'}
            `
          }
          onClick={submit}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : formType}
        </button>
        <button
          className="border px-4 py-2 rounded hover:bg-gray-50"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default TodoForm;
