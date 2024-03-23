import { useState } from "react";



function Card({id,image,info,price,name,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description=readmore? info:`${info.substring(0,200)}....`
    
    function readMoreHandler(){
        setReadmore(!readmore);
    }

   

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour=datails">
                    <h4 className="tour-price">{price}</h4> 
                    <h4 className="tour-name">{name}</h4> 
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                    {readmore?`show less`: `show more`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;