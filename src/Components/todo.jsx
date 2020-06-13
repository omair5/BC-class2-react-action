import React from 'react';
import TodoForm from './TodoForm'

const TodoApp = () => {

    

    return (
        <div>
            <h1>TODO APP</h1>
            <br /><br />
            <TodoForm />
        </div>
    );
}

export default TodoApp;




























































// import React, { useState, useEffect } from 'react';
// import TodoList from './todoList'

// const TodoApp = () => {
//     // HOOKS
//     const [todoitem, setTodoitem] = useState('')
//     const [add_item, set_add_item] = useState([])
//     const [pendingtasks, setpendingtasks] = useState(0)

//     // CALLBACK FUNCTIONS
//     const HandleTodoItem = (e) => {
//         setTodoitem(e.target.value)
//     }


//     const HandleAddItems = () => {
//         set_add_item(olddata => [...olddata, { todoitem, isCompleted: false }]
//         )
//         // set_add_item([...add_item, todoitem])
//         setTodoitem(' ')
//     }

//     const HandleDelete = (id) => {
//         // WITH SPLICE

//         let currentState = add_item
//         currentState.splice(id, 1)
//         set_add_item([...currentState])

//         // WITH FILTER

//         // set_add_item((prevstate) => {
//         //     return prevstate.filter((value,index)=>{
//         //         return index!==id
//         //     })
//         // })

//     }

//     const handleComplete = (id) => {
//         let for_complete_status = add_item;
//         console.log(for_complete_status)
//         for_complete_status[id].isCompleted = !for_complete_status[id].isCompleted
//         set_add_item([...for_complete_status])
//     }

//     useEffect(() => {
//         setpendingtasks(add_item.filter(value=>!value.isCompleted).length)
//      },[add_item])

//      const reset=()=>{
//          set_add_item([])
//      }

//     return (
//         <div>
//             <h1>MY TODO APP USING REACT</h1>
//             <h3>PENDING TASKS : {pendingtasks}</h3>
//             <input type="text" placeholder="Add Item" value={todoitem} onChange={HandleTodoItem} />
//             <button onClick={HandleAddItems}>Add</button>
//             <button onClick={reset}>RESET LIST</button>
//             <h3>{add_item.map((value, index) => {
//                 console.log(value.isCompleted)
//                 return <TodoList key={index} items={value.todoitem} id={index} completeStatus={value.isCompleted} HandleDelete={HandleDelete} handleComplete={handleComplete} />
//             })}</h3>
//             <br /><br />

//         </div>
//     );
// }

// export default TodoApp;
