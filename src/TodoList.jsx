import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [items, setItem] = useState([{ id: 121, name: "Moazzam", isDone: false}]);
    const [newitem, setNewItem] = useState("");
    const [OnnOff, setOnOff] = useState(true);
    const [btnText, setBtnText] = useState("Lower-Case");
    

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    }

    const delItem = (id) => {
        setItem(items.filter((item) => item.id != id));
    }
    const addItem = () => {
        if (newitem.trim() === "") {
            return;
        }
        setItem([...items, { id: uuidv4(), name: newitem, isDone: false}]);
        setNewItem("");
    }


    const listItem = items.map((item, index) => (
        <li key={item.id} >
            <h2 className={`bg-secondary ${item.isDone ? 'fs-1' : ''}`} style={item.isDone? {textDecoration: "line-through"} : {}}>{`${index + 1}.  `} {item.name}</h2>
            <button onClick={() => delItem(item.id)}>Delete</button>
            <button onClick={() => UprCaseOne(item.id)}>{btnText}</button>
            <button  onClick={() => markDone(item.id)}>Mark as Done</button>
        </li>
    ));


    let UprCaseOne = (id) => {
        setOnOff(!OnnOff);
        setItem((items) =>
            items.map((item) => {
                if (item.id == id) {
                    return {
                        ...item,
                        name: OnnOff ? item.name.toLowerCase() : item.name.toUpperCase(),
                        
                    };
                }
                 else {
                    return item;
                }

            }))
            
    }


    const markDone = (id) => {
        setItem((items) =>
            items.map((item) => {
                if(item.id == id){
                    return {
                        ...item,
                        isDone: true,
                    };
                }else{
                    return item;
                }
                
            }))
    }

    const UprCaseAll = () => {
        setOnOff(!OnnOff);
        setItem((items) =>
            items.map((item) => {
                return {
                    ...item,
                    name: OnnOff ? item.name.toLowerCase() : item.name.toUpperCase()
                }
            }))
    }


    return (
        <div>
            <h1 className="fw-bold text-center m-5">TodoList App</h1>
            <div className="container">
                <div className="">
                    <div className="form-group d-flex align-items-center justify-content-center">
                        <div className="form-floating w-50">
                            <input type="text" value={newitem} onChange={handleInputChange} className="form-control  border border-primary border-2 rounded-4 " id="input" placeholder="Enter List" />
                            <label htmlFor="input">Enter Todo List</label>
                            <small className="ms-2">Add Tasks</small>
                        </div>
                        <div className="ms-2 pb-4">
                            <button onClick={addItem} className="btn btn-primary ">Add Tasks</button>
                        </div>
                    </div>
                </div>

                <hr className="border border-dark m-3" />

                <div className="list list-items  d-grid align-items-center justify-content-center ">
                    <ul>{listItem}</ul>
                    <button onClick={UprCaseAll}>Upper Case All</button>
                </div>
            </div>
        </div >
    )
}