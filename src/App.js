import './App.css';
import Navbar from './component/Navbar';
import TodoCard from './component/TodoCard';

function App() {
  return (
    <>
      <Navbar />
      <div className="h-[91vh] w-screen bg-blue-900 flex justify-center items-center">
        <TodoCard />
      </div>
    </>
  );
}

export default App;
