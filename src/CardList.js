import React from "react";
import Card from "./Card";

const CardList=(props)=>{
    const {robots}=props;
    return(
        <div>
            {
                robots.map((user,i)=>
                {
                    return(<Card key={robots[i].id} name={robots[i].name} username={robots[i].username} id={robots[i].id} email={robots[i].email}/>) 

                }
                )
            }
        </div>
    );
}

export default CardList;