import { useState } from "react";


export const TaskList = ({tasks, onChangeTask, onDeleteTask}) =>{

    return(
        <ul >
            {
                tasks.map(task => {
                    return(
                        <li key={task.id}>
                        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                    )
                })
            }
        </ul>
    );
}

export const Task = ( {task, onChange, onDelete} ) =>{

    const [isEdit, setIsEdit] = useState(false);

    let taskContent = isEdit ? 
    ( <>
        <input value={task.text}
                onChange={ e=> {onChange({...task, text:e.target.value})}}
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
                        onChange={e=>{onChange({...task,done:e.target.checked})}}
                        />
                {taskContent}
                <button onClick={()=>onDelete(task.id)} className="px-2">
                    Delete
                </button>
            </label>
        </div>
    )
}

export const AddTask = ({onAddTask}) =>{

    let [TaskText, setTaskText] = useState("")
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
                onAddTask(TaskText)
            }}>
                Add
            </button>
        </div>
    )

}