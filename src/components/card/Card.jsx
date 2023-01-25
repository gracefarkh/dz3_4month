import { useState } from "react"
import Button from "../button/Button"

function Card({item}){

    const[like,setLike]=useState(1)
        const handleLike = ()=>{
            setLike (like+1)
    } 
    return(
        <div style={{
            width:'200px',
            height:'363px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            background:'red',
            borderRadius:'8px',
            color:'white'
            // background:`url(${item.url}) no-repeat center/cover`
        }}>
            <img src={item?.url} alt="" />
            <h3>{item?.name}</h3>
            <h3>{item?.price}</h3>
            <h3>{like}</h3>
            <Button onClick ={handleLike} >Like</Button>
        </div>
    )
}
export default Card