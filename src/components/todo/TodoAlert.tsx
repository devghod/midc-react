import { useEffect, useState } from "react"
import { Todo } from "../../types"
import { useTodoStore } from "../../stores"

const TodoAlert = ({
  title,
  description,
  type,
  data,
  closeModal
} : {
  title: string
  description: string
  type?: string
  data: Todo
  closeModal: () => void
}) => {

  const { deleteTodo, isLoading } = useTodoStore();
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (type) setColor(colors[type]);
    return
  }, []);

  const confirm = () => {
    deleteTodo(data.id)
    setTimeout(() => closeModal(),2000);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-4">
        <div 
          className={`text-lg font-bold mb-4 text-${color}-500`}
        >
          {title}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="space-x-2">
          <button
            className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600`}
            onClick={confirm}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Confirm'}
          </button>
          <button
            className="border px-4 py-2 rounded hover:bg-gray-50"
            onClick={closeModal}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoAlert;

const colors: any = {
  'update': 'green',
  'delete': 'red',
}