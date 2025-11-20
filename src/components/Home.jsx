import { useNavigate } from "react-router";

import HeaderBar from "./HeaderBar";
import "./Home.css"

function Events(props) {
    let events = [1, 2, 3, 4];
    const navigate = useNavigate();

    return <div>
        <h2>EVENTS</h2>
        <div style={{display: "flex"}}>
            { events.map(event => <img
                src="images/placeholder.png"
                alt="an image of an aqaurium"
                height="250"
                width="150"
                key={event}
                className="event-item"
                onClick={() => navigate("/events")}
                />)
            }
        </div>
    </div>
}

function Exhibits(props) {
    const navigate = useNavigate();

    return <div>
        <h2>EXHIBITS</h2>
        <button onClick={() => navigate("/exhibits")}>See more</button>
    </div>
}

function Species(props) {
    const navigate = useNavigate();

    return <div id="fish-main">
        <div id="fish-image">
            <h2>Fish of the Day</h2>
            <img src="images/fish_placeholder.png" alt="an image of an aqaurium" height="250"/>
        </div>
        <div id="fish-info">
            <h3>Fish name</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. </p>
            <button onClick={() => navigate("/species")}>more species</button>
        </div>
    </div>
}

export default function Home(props) {
    return <div style={{padding: 5}}>
        <HeaderBar/>
        <Events/>
        <Exhibits/>
        <Species/>
    </div>
}