import { useState } from "react";

const Counting2 = () => {
    
    const [count, setCount] = useState(0);
    const [merdeka, setMerdeka] = useState(true);
    const [name, setName] = useState('');

    return (
        <>
        <div style={{border: "1px solid red",padding:"10px",borderRadius:"10px"}}>
        <h2>Counting 2</h2>
        <p>{count}</p>
        <p>{merdeka.toString()}</p>
        <button onClick={()=>{
            setCount(count+1);
            setMerdeka(!merdeka)
        }}>Tambah</button>
                <button onClick={()=>{
            setCount(0);
            setMerdeka(true)
        }}>Reset</button>
        <button onClick={()=>{
            if(count >0){
                setCount(count-1);
                setMerdeka(!merdeka)
            }
        }}>Kurang</button>
        <input onChange={(event)=>{
            setName(event.target.value)
        }}></input>
        <p>How are you?, {name}</p>
        </div>
        </>
    )
}

export default Counting2;