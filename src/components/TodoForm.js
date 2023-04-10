import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';


const TodoForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <div class="container">

                <header class="text-center text-light my-4">
                    <h1 class="mb-4 text-dark">Todo List</h1>
                </header>
                
                <div class="card p-5">
                    <label>Todo Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" 
                        class="form-control m-auto mb-2" 
                    >
                    </input>
                    <label>Todo Description</label>
                    <input 
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" 
                        class="form-control m-auto"
                    >
                    </input>
                    <button
                    className='btn btn-primary mt-4'
                    onClick={() => {
                        dispatch(addTodo({id:uuidv4(), title,description}))
                        setTitle("");
                        setDescription("")
                    }}>Add Todo</button>
                </div>

            </div>
        </div>
    )
}

export default TodoForm
