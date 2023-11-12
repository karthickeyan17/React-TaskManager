import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import Todoitems from './Todoitems';

let no=0;
const Todo = () => {
    const [todos,set_todos]=useState([]);
    const input_ref=useRef(null);

    const add = () =>{
        if(input_ref.current.value==="")return window.alert("ENTER YOUR TASK");
        set_todos([...todos,{count:no++,text:input_ref.current.value,flag:true}]);
        input_ref.current.value="";
        localStorage.setItem('todos_count',no);
    } 

    useEffect(()=>{
      set_todos(JSON.parse(localStorage.getItem("todos")));
      no=localStorage.getItem("todos_count");
    },[])
    
    useEffect(()=>{
         setTimeout(()=>{
         localStorage.setItem("todos",JSON.stringify(todos));},100)
    },[todos])

  return (
    <div className='todo'>
        <div className='todo-add'>
                <input ref={input_ref} type='text' placeholder='Add Your Task' className='todo-input'/>
                <div onClick={add} className='todo-add-btn'>ADD</div>
        </div>
        <div className='todo-list'>
            {todos.map((item,index)=>{return <Todoitems key={index} no={item.count} text={item.text} flag={item.flag} set_todos={set_todos}/>})}
        </div>
    </div>
  )
}

export default Todo
