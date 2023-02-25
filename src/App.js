import React, { useState } from 'react'
import TodoList from './TodoList';

const App =() => {
  const [inputList,setInputList]= useState("");
  const [Item,setItem]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const ListOfItems=()=>{
   setItem((olditems)=>{
     return [...olditems,inputList];
   });
   setInputList("");
  };
  const deleteItems=(id)=>{
    console.log("deleted");
    setItem((olditems)=>{
      return olditems.filter((arrElemets,index)=>{
        return  index !==id;
      })
    })
};
  return(
  <div className='main_div'>
    <div className='center_div'>
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder='Add an item' value={inputList} onChange={itemEvent}/>
      <button on onClick={ListOfItems}> + </button>


      <ol>
        {/* <li>{inputList}</li> */}
        {Item.map( (itemvalue,index) => {
          return <TodoList key={index} id={index} text={itemvalue}
          onSelect={deleteItems}
          />
        })}
      </ol>

    </div>
  
  </div>
  )

};

export default App

