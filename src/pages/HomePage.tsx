import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border shadow rounded-lg divide-y h-96 min-w-96">
        <div className="flex justify-between">
          <div className="px-3 py-2 font-semibold">Tech Tools</div>
          <div className="content-center">
            <Link 
              to="/todo"
              className="text-xs bg-blue-500 hover:bg-blue-600 text-white font-medium px-2 py-1 rounded mx-2"
            >Proceed to Todo List</Link>
          </div>
        </div>
        
        <div className="px-4 py-2 text-sm">
          <ul>
            <li>ReactJS Library</li>
            <li>Zustand - State Management</li>
            <li>React Router Dom</li>
            <li>Tailwindcss</li>
          </ul>
        </div>

        <div className="">
          <div className="px-3 py-2 font-semibold">Directory Structure</div>
          <div className="border mx-3 rounded text-xs px-2 py-2 bg-gray-50">
            src {`>`}
            <ul className="ml-4">
              <li>assets</li>
              <li>components</li>
              <li>constants</li>
              <li>features</li>
              <li>pages</li>
              <li>routes</li>
              <li>stores</li>
              <li>types</li>
              <li>utils</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;