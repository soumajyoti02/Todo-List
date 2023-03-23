import React, { useState } from 'react'
import TodoInner from './TodoInner'

const TodoCard = () => {
    const [newTask, setnewTask] = useState('') // To Receive Tasks from input text
    const [Tasks, setTasks] = useState([]) // To Write The Tasks in Middle Div

    const handleInputChange = (event) => {
        setnewTask(event.target.value) // To Extract the Texct from input and set it in neweTask
    }

    const handleTaskCheck = (checkedTask) => {
        setTasks(Tasks.filter(Tasks => Tasks !== checkedTask))
    }
    /*
        In the TodoInner, We Passed this function as props. When We click the checkBox, in onChange, we call
        this function there. That means when we tick checkbox, this function will be called. Then That Task 
        will go as the checkTask Parameter. Then this function filters all the Tasks and returns all the 
        task except that Task.
    */

    const handleClick = () => {
        setTasks([...Tasks, <TodoInner taskBody={newTask} onCheck={handleTaskCheck} />])
        setnewTask('') // This will clear the input box when That task is updated
    }

    return (
        <>
            <div className="card  h-[450px] w-[400px] bg-gray-100">
                <div className="card-header font-semibold text-lg text-center font-serif h-[15%]">Your Daily Goals</div>
                <div className="todo-center h-[50%] overflow-auto p-4 border-2 rounded-xl" >
                    {Tasks}
                </div>

                <div className="card-body flex flex-col items-center justify-center h-[35%] space-y-4">

                    <input type={Text} className="w-full p-3 outline-none  rounded-xl text-gray-600" id="exampleFormControlTextarea1" rows="1" value={newTask} onChange={handleInputChange} placeholder='Write Your Task Here' ></input>

                    <button disabled={newTask.length === 0 ? true : false} href="#" className="btn btn-success" onClick={handleClick}>Add Task</button>

                </div>
            </div>
        </>
    )
}

export default TodoCard