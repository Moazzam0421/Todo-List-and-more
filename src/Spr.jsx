export default function Spr(){
        const array = [23, 24, 45, 55,56 ,65];
        const spdarray = array.map((arr)=>{
            return <li>{arr}</li>
        });
    return(
        <div>
            <h1>{spdarray}</h1>
        </div>
    )
}