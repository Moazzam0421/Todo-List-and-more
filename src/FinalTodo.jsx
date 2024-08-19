import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FinalTodo() {
    const [items, setItems] = useState([{ id: 121, name: "Moazzam", isDone: false, btnText: "Upper-Case", btnTextAll: "Upper-Case-All" }]);
    const [newItem, setNewItem] = useState("");
    const [onOff, setOnOff] = useState(true);

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const delItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const addItem = () => {
        if (newItem.trim() === "") {
            return;
        }
        setItems([...items, { id: uuidv4(), name: newItem, isDone: false, btnText: "Upper-Case", btnTextAll: "Upper-Case-All"}]);
        setNewItem("");
    };

    const toggleCase = (id) => {
        setItems((items) =>
            items.map((item) => {
                if (item.id === id) {
                    const updatedName = item.btnText === "Upper-Case" ? item.name.toUpperCase() : item.name.toLowerCase();
                    const updatedBtnText = item.btnText === "Upper-Case" ? "Lower-Case" : "Upper-Case";
                    return {
                        ...item,
                        name: updatedName,
                        btnText: updatedBtnText,
                    };
                } else {
                    return item;
                }
            })
        );
    };

    const markDone = (id) => {
        setItems((items) =>
            items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isDone: true,
                    };
                } else {
                    return item;
                }
            })
        );
    };


    const toggleCaseAll = () => {
        setOnOff(!onOff);
        setItems((items) =>
            items.map((item) => {
                return {
                    ...item,
                    name: onOff ? item.name.toUpperCase() : item.name.toLowerCase(),
                };
            })
        );
    };

    return (
        <div>
            <h1 className="fw-bold text-center m-5">TodoList App</h1>
            <div className="container">
                <div className="">
                    <div className="form-group d-flex align-items-center justify-content-center">
                        <div className="form-floating w-50">
                            <input
                                type="text"
                                value={newItem}
                                onChange={handleInputChange}
                                className="form-control border border-primary border-2 rounded-4"
                                id="input"
                                placeholder="Enter List"
                            />
                            <label htmlFor="input">Enter Todo List</label>
                            <small className="ms-2">Add Tasks</small>
                        </div>
                        <div className="ms-2 pb-4">
                            <button onClick={addItem} className="btn btn-primary">
                                Add Tasks
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border border-dark m-3" />

                <div className="list list-items d-grid align-items-center justify-content-center">
                    <ul>
                        {items.map((item, index) => (
                            <li key={item.id} className="mb-3 list-unstyled">
                                <h2
                                    className={`bg-light ${item.isDone ? 'fs-1' : ''}`}
                                    style={item.isDone ? { textDecoration: "line-through" } : {}}
                                >
                                    {`${index + 1}. ${item.name}`}
                                </h2>
                                <button onClick={() => delItem(item.id)} className="btn btn-danger me-2">
                                    Delete
                                </button>
                                <button onClick={() => toggleCase(item.id)} className="btn btn-primary me-2">
                                    {item.btnText}
                                </button>
                                <button onClick={() => markDone(item.id)} className="btn btn-success">
                                    Mark as Done
                                </button>
                            </li>
                        ))}
                    </ul>
                    {items.length > 0 && (
                        <button onClick={toggleCaseAll} className="btn btn-warning mt-3">
                            Upper Case All
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
