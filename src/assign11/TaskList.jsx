import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "./TaskContext";


export const TaskList = () =>{

    const tasks = useContext(TaskContext);

    return(
        <ul >
            {
                tasks.map(task => {
                    return(
                        <li key={task.id}>
                        <Task task={task} />
                    </li>
                    )
                })
            }
        </ul>
    );
}

export const Task = ({task}) =>{

    const dispatch = useContext(TaskDispatchContext);
    const [isEdit, setIsEdit] = useState(false);

    let taskContent = isEdit ? 
    ( <>
        <input value={task.text}
                onChange={ e=> {        
                    dispatch({
                    type: 'changed',
                    task: { ...task, text:e.target.value}
                })}}
        />
        <button onClick={()=>setIsEdit(false)} className="px-2" > Save </button>
    </> ) 
    :
    (<>
        {task.text}
        <button onClick={()=>setIsEdit(true)} className="px-2" > Edit </button>
    </>);

    return(
        <div>
            <label>
                <input type="checkbox" 
                        checked={task.done}
                        onChange={e=>{        
                                dispatch({
                                type: 'changed',
                                task: { ...task, done:e.target.checked}
                            })}
                        }
                        />
                {taskContent}
                <button onClick={()=>{
                            dispatch({
                            type: 'deleted',
                            id: task.id
                            });
                        }} className="px-2">
                    Delete
                </button>
            </label>
        </div>
    )
}

export const AddTask = () =>{

    let [TaskText, setTaskText] = useState("")

    const dispatch = useContext(TaskDispatchContext)

    return(
        <div>
            <input 
                type="text"
                value={TaskText}
                placeholder="Taskname..."
                onChange={e=>setTaskText(e.target.value)}
            />
            <button className="px-2" onClick={()=>{
                setTaskText('')
                dispatch({
                    type : "add",
                    id: nextId++,
                    text: TaskText
                });
            }}>
                Add
            </button>
        </div>
    )

}

let nextId = 3;