import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
	return (
		<div style={{display:"flex", flexWrap:"wrap"}} className="App">
			<Food></Food>
		</div>
	)
}

const Food = () => {
	const [foods, setFood] = useState([])
	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
			.then((res) => res.json())
			.then((data) => setFood(data.meals))
	}, [])
	foods.map(food=>console.log(food))
	return (
		<>
		{foods.map(food => <Card name={food.strIngredient1} thumb={food.strMealThumb} inst={food.strInstructions}></Card>)}
		</>
	)
}
const Card = (props) => {
	return (
		<>
			<div style={{width:"300px", margin:"30px"}} className="food">
        <img width="100%" src={props.thumb} alt="" />
				<h1>{props.name}</h1>
        <p>{props.inst.slice(0,200)}</p>
			</div>
		</>
	)
}
export default App
