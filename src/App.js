import React from "react"
import Nav from "./components/Navbar"
import Main from "./components/Main"
import data from "./data.js"
import './style.css';
export default function App(){ 
   const MainComponent = data.map((item)=>{
       return (
           <Main 
            key = {item.location}
            item = {item}
           />
       )
   })
    return (
        <div className="container"> 
           <Nav />
           {MainComponent}
        </div>
    )
}