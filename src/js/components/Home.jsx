import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css"

//create your first component
const Home = () => {
const [color, setColor] = useState("")
const [resultado, setResultado] = useState("")
	
useEffect(()=>{
	setResultado(color)

}, [color])


	
	
	return (
		<div className="d-flex flex-column align-items-center">
		<div className="semaforo bg-dark d-flex flex-column align-items-center py-3 rounded">
		<div className={`light red ${color==="red" ? "glow" : ""}`} onClick={()=>setColor("red")}></div>
		<div className={`light yellow ${color==="yellow" ? "glow" : ""}`} onClick={()=>setColor("yellow")}></div>
		<div className={`light green ${color==="green" ? "glow" : ""}`} onClick={()=>setColor("green")}></div>
		<div className={`light ${color === "purple" ? "purple glow"  : ""}`}></div>
		</div>
		<div className="palo bg-dark"></div>
		<button onClick={()=>setColor("purple")}>Haz click aqui para que aparezca púrpura</button>
		<h3>el color a cambiado a {resultado}</h3>
		</div>
		
		
		

		

		


		
	);
};

export default Home;