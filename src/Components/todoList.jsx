import React from 'react';
import '../App.css'

const TodoList = ({ item, id, handleDelete, handleComplete, isCompleted }) => {
    return (
        <div>
            <li className={isCompleted ? 'cross' : ''} >{item}</li>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleComplete(id)}>check/uncheck</button>
        </div>
    );
}

export default TodoList;















































// import React from 'react';
// import '../App.css'

// const TodoList = ({ items, HandleDelete, id, handleComplete, completeStatus }) => {
//     console.log(completeStatus)
//     return (
//         <div>

//             <li className={completeStatus ? 'cross' : ''}> {items} </li>
//             <button onClick={() => HandleDelete(id)}>click me</button>
//             <button onClick={() => handleComplete(id)}>completed</button>
//         </div>
//     )
// }

// export default TodoList;