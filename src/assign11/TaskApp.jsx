import { useReducer } from "react";
import { AddTask, TaskList } from "./TaskList";
import { TaskContext, TaskDispatchContext } from "./TaskContext";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher's Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false }
];

export const TaskApp = () =>{

    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    );

    // const handleAddTask = (text) => {
    //     dispatch({
    //         type : "add",
    //         id: nextId++,
    //         text: text
    //     });
    // }

    // const handleChangeTask = (task) => {
    //     dispatch({
    //         type: 'changed',
    //         task: task
    //     })
    // };

    // const handleDeleteTask = (taskId) => {
    //     dispatch({
    //         type: 'deleted',
    //         id: taskId
    //     })
    // };

    return(
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                <AddTask />
                <TaskList />
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}


export const taskReducer = (tasks, action) => {
    switch(action.type){
        case 'add':{
            return [
                ...tasks,
                {
                    id:action.id,
                    text:action.text,
                    done:false
                }];
        }
        case 'changed':{
            return tasks.map(t => {
                if(t.id === action.task.id){
                    return action.task
                }
                return t

            })
        }
        case 'deleted':{
            console.log(action.id)
            return tasks.filter(t => t.id != action.id)
        }
        default:{
            throw Error('Unknown action')
        }
    }
}