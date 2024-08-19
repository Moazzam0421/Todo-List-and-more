import React, { useState } from "react";

export default function LikeButton() {
    const [islike, setIsLiked] = useState(false);
    const [count, setCount] = useState(999);
    let res = 0;
    let toggle = () => {
        setIsLiked(!islike);

        if(islike == false){
            setCount(count + 1);
            res++;
            console.log(res);
        }else{
            setCount(count - 1);
        }

    }
   

    return (
        <div className="border border-3 border-dark rounded-5 p-3 shadow-lg">
            <h1 className="display-3">Moazzam</h1>
            <img className="img-fluid rounded-5 pb-2" width={300} alt="image" src="./src/assets/boy.png" />
            <div className="fw-bold d-flex align-items-center justify-content-center text-dark">
                <a className="fw-bold d-block align-items-center justify-content-center text-dark" onClick={toggle}  href="#">Like </a>
                &nbsp; &nbsp;
                <span onClick={toggle} >
                    {
                        islike ? <i className="fa-solid fa-heart text-danger fs-1"></i> : <i className="fa-regular fa-heart text-dark fs-1"></i>
                    }
                </span>
                &nbsp; &nbsp;
                <a href="#" className="text-dark" >{count}</a>
            </div>
            <a href="#">{islike.toString()}</a>
        </div>
    )
}
