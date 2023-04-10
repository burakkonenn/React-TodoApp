import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './TodoForm'
import { deleteTodo , updateTodo} from '../redux/todoSlice'


const Todos = () => {

    const todos = useSelector((state) => state.todos.items)
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);

    const [updatedTitle, SetUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
console.log(updatedTitle);
    return (
        <div>
            <TodoForm />
            <div class="container mt-5 border-top pt-5">
                <ul class="list-group todos mx-auto text-light">
                    {todos.length > 0 ? todos.map(todo =>
                        <li key={todo.id} class="list-group-item d-flex">
                            <div className='card w-100'>
                                <div className='card-header'>
                                    <div>
                                        <span>{todo.title}</span>
                                        <i class="far fa-trash-alt delete"></i>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='mt-2'>
                                        <h4>{todo.description}</h4>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <div>
                                    <button className='btn btn-warning' onClick={() => { 
                                    setIsEdit(true); 
                                    setId(todo.id) }}>Edit</button>
                                        <button onClick={() => dispatch(deleteTodo(todo.id))} className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                                {isEdit && id === todo.id && (
                                <>
                                    <input
                                        value={updatedTitle}
                                        onChange={(e) => SetUpdatedTitle(e.target.value)}
                                        type='text'
                                        placeholder='updated title'
                                    ></input>

                                    <input
                                        value={updatedDescription}
                                        onChange={(e) => setUpdatedDescription(e.target.value)}
                                        type='text'
                                        placeholder='updated description'
                                    ></input>

                                    <button
                                        className='btn btn-primary'
                                        onClick={() => {
                                            dispatch(
                                                updateTodo({ id: todo.id, title: updatedTitle, description: updatedDescription })
                                            )
                                        }}>Update
                                    </button>
                                </>
                            )}
                            </div>
                        </li>
                    ) : "there is no todo"}
                </ul>
            </div>
        </div>
    )
}

export default Todos
