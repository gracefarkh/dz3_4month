import Card from "../card/Card"
import { links } from "../../links/CardPhoto/link"
import Input from "../input/input"


function Catalog(){
// const cards = Array(10).fill({
const cards = [{
    name:"boots",
    price:120,
    url:links.url,
    likes:0
},{
    name:"boots",
    price:120,
    url:links.url,
    likes:0
},{
    name:"boots",
    price:120,
    url:links.url,
    likes:0   
},{
    name:"boots",
    price:120,
    url:links.url,
    likes:0 
},{
    name:"boots",
    price:120,
    url:links.url,
    likes:0 
},{
    name:"boots",
    price:120,
    url:links.url ,
    likes:0
},{
    name:"boots",
    price:120,
    url:links.url,
    likes:0    
},{
    name:"boots",
    price:120,
    url:links.url ,
    likes:0
}]

    const handleSearch = (e)=>{
        console.log(e.target.value)
    }  
    const handleLike = (e)=>{
        console.log(e.target.dataset.id)
    } 
    return(
        <>
        <Input style={{
            display: 'flex',
            width: '433px',
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginRight: 'auto',
            marginLeft: 'auto'
        }} onChange={handleSearch}/>
        <div style={{
            padding:'50px 50px',
            display:'flex',
            gap:'50px',
            flexWrap:'wrap',

        }}>
            {cards.map((product,i)=>(<Card key={i} item={product}/>))}
        </div>
        </>
    )
}

export default Catalog