import React, { useState, useEffect } from 'react';
import TodoList from './todoList'

const TodoForm = () => {
    // HOOK
    const [value, setvalue] = useState('')
    const [todoitems, settodoitems] = useState([])
    const [pendingtasks, setpendingtasks] = useState(0)

    // CALLBACK FUNCTIONS
    const onchangeHandler = (e) => {
        setvalue(e.target.value)
    }

    const add_item = () => {
        if (value === '') {
            alert('please enter an item')
        }
        else {
            settodoitems(prevstate => [...prevstate, { value: value, isCompleted: false }])
            setvalue('')
        }
    }

    const deleteItem = (id) => {
        // WITH SPLICE

        // console.log(id)
        // let array_for_delete = todoitems
        // array_for_delete.splice(id, 1)
        // settodoitems([...array_for_delete])

        // WITH FILTER
        let array_for_delete = todoitems
        let new_array = array_for_delete.filter((value, index) => {
            return index !== id
        })
        settodoitems([...new_array])
    }

    const handleCompleted = (id) => {
        let array_for_complete = todoitems
        array_for_complete[id].isCompleted = !array_for_complete[id].isCompleted
        settodoitems([...array_for_complete])
    }

    const reset = () => {
        settodoitems([])
    }

    useEffect(() => {
        setpendingtasks(todoitems.filter(value => value.isCompleted === false).length)
    }, [todoitems])

    return (
        <div>
            <h3>PENDING TASKS : {pendingtasks}</h3>
            <input type="text" placeholder='Add Item Here' onChange={onchangeHandler} value={value} />
            <button onClick={add_item}>Add Item</button>
            <button onClick={reset}>Reset List</button>
            {todoitems.map((item, index) => {
                return <TodoList key={index} item={item.value} isCompleted={item.isCompleted} id={index} handleDelete={deleteItem} handleComplete={handleCompleted} />
                //     <li key={index}>{value}</li>
            })}
        </div>
    );
}

export default TodoForm;