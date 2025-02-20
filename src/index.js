import React , {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";




function Backchanger(){
    console.log("rendering")

    const [color , setcolor] = useState('grey');
    

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])

    return(
    <div id="main">
        <h1>Background changer</h1>
        <button style={{backgroundColor:"red",color:"white"}} onClick={()=>setcolor('red')}>Red</button>
        <button style={{backgroundColor:"green",color:"white"}} onClick={()=>setcolor('green')}>Green</button>
        <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>setcolor('blue')}>Blue</button>
        <button style={{backgroundColor:"pink",color:"white"}} onClick={()=>setcolor('pink')}>Pink</button>
        <button style={{backgroundColor:"yellow",color:"white"}} onClick={()=>setcolor('yellow')}>Yellow</button>
    </div>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<Backchanger></Backchanger>)