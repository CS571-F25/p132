import { useNavigate } from "react-router";
import { species } from "../information";
import "./Home.css"

export default function Species(props) {
    const navigate = useNavigate();
    let fish = species[Math.floor(Math.random() * species.length)];

    return <div id="fish-main">
        <div id="fish-image">
            <h2>Fish of the Day</h2>
            <img src={`images/${fish.img}.png`} alt={`an image of a ${fish.name}`} height="250"/>
        </div>
        <div id="fish-info">
            <h3>{fish.name}</h3>
            <p>{fish.description}</p>
            <button onClick={() => navigate("/species")}>more species</button>
        </div>
    </div>
}