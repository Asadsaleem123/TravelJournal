import React from "react"
export default function Main(props){
    console.log(props.item)
    return (
        <div className="main--container">
           <div className = "card">
           <img className = "flex--child--first" src={props.item.imageUrl} />
           <div className = "flex--child--second">
           <div className= "flex--child--second--container">
               <i className="fa fa-map-marker" />
               <p className ="city">{props.item.location}</p>
               <a href = "">View on Google maps</a>
            </div>
            <div className = "details--container">
            <h1 style = {{fontSize:"20px"}}>{props.item.title}</h1>
            <h2>{props.item.startDate} - {props.item.endDate}</h2>
            <p>
              {props.item.description}
            </p>
            </div>
           </div>
           </div>
        </div>
    )
}