import "./Home.css"
import { useNavigate } from "react-router";
import { events } from "../information";

export default function Events(props) {
    const navigate = useNavigate();

    return <div>
        <h2>EVENTS</h2>
        <div id="events">
            { events.map(event => <img
                src={`images/${event.img}.png`}
                alt="an image of an aqaurium"
                height="250"
                key={event.img}
                className="event-item"
                onClick={() => navigate("/events")}
                />)
            }
        </div>
    </div>
}