
export default function Form(){
    return(
        <div>
            <form onSubmit={btnClick} action="#">
                <input type="text" />
                <button>Click me</button>
            </form>
        </div>
    )
}

let btnClick = (()=>{
    console.log("form Submitted");
  })