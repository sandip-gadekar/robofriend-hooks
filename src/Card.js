import React from "react";

const Card=(props) =>{
    const {name,username,email,id}=props;
    return(
        <div className="tc bg-light-green dib pa2 ma3 br3 grow " style={{width:"300px" ,height:'450px'}}>
            <img src={`https://robohash.org/${id}?200x200`}/>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );

}

export default Card;