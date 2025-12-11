import { exhibits, species } from "../information";
import HeaderBar from "./HeaderBar";
import "./ExhibitsPage.css";
import { useState } from "react";
import ExhibitCard from "./ExhibitCard";

function FishProfile(props) {
    let fish = props.fish;
    return <div style={{maxWidth: "100px"}}>
        <img src={`images/${fish.img}.png`} alt={`an image of a ${fish.name}`} height="50"/>
        <p>{fish.name}</p>
    </div>
}

export default function ExhibitsPage(props) {
    const [showDetails, setShowDetails] = useState(false);
    const [fish, setFish] = useState([]);
    const [curExhibit, setCurExhibit] = useState("")

    function setExhibit(id) {
        setFish(o => {
            let newO = species.filter(s => s.exhibit === id);
            return newO;
        });
        setShowDetails(true);
        setCurExhibit(exhibits.filter(ex => ex.id === id)[0]);
    }
    
    return <div id="exhibits-main">
        <HeaderBar/>
        <div>
        { showDetails 
        ? <div>
            <div id="details-main">
                <img src={`images/${curExhibit.img}.png`} alt={`an image of the ${curExhibit.name} exhibit`} height="250"/>
                <div id="info">
                    <h2>{curExhibit.name}</h2>
                    <p>{curExhibit.description}</p>
                </div>
            </div>
            <div id="fish-profiles">
                { fish.map(f => <FishProfile key={f.id} fish={f}/>) }
            </div>
            <button onClick={() => setShowDetails(false)} id="back-button">back</button>
        </div>
        : exhibits 
            ? exhibits.map(ex => <ExhibitCard key={ex.id} num={ex.num} exhibit={ex} setExhibit={setExhibit}/>)
            : <p>Loading exhibits...</p>
        }
        </div>
    </div>
}