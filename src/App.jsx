import TodoDisplay from "./components/TodoDisplay"
import TodoInput from "./components/TodoInput"


function App() {
  

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <TodoInput/>
      <TodoDisplay/>
    </div>
  )
}

export default App
