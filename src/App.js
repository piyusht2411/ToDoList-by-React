import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [items, SetItemEvent] = useState("");
  const [allItems, setAllitems] = useState([]);

  const ItemEvent = (event)=>{
    SetItemEvent(event.target.value);

  }
  const itemSubmit = () => {
    setAllitems((olditems)=>{
      return [...olditems, items];
    });
    SetItemEvent("");
  }
  const deleteItem = (id)=>{
    setAllitems((olditems)=>{
      return olditems.filter((arrElem, index)=>{
        return index!==id;

      })
    })

  }

  return(
    <>
    <h1>To Do list</h1>
    <input type = "text" placeholder='Enter text' value={items} onChange={ItemEvent}/>
    <button onClick={itemSubmit}>+</button>

    <ol>
      {allItems.map((val, index)=>{
        return <Todolist text = {val} key = {index} id = {index} onSelect = {deleteItem}/>

      })
      }
    </ol>
    </>
  )
};

export default App;
