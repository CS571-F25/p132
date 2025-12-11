import { useState } from "react";
import "./EventsPage.css"

export default function EventCard(props) {
    const [seeMore, setSeeMore] = useState(false);
    let event = props.event;

    return <div id="event-card-main">
        <img src={`images/${event.img}.png`} alt={`a cover image for the ${event.name} event`} width="250" height="250"/>
        <div id="info">
            <h2>{event.name}</h2>
            { seeMore 
                ? <div>
                    <p>{event.short_desc}</p>
                    <p>{event.long_desc}</p>
                </div>
                : <p>{event.short_desc}</p>
            }
            <div id="event-buttons">
                <button onClick={() => setSeeMore(curr => !curr)}>{seeMore ? "see less" : "see more"}</button>
                { seeMore 
                    ? <button onClick={() => {
                            props.addBooked(event.name);
                            setSeeMore(false);
                        }
                        }>book</button>
                    : <div/>
                }
            </div>
        </div>
    </div>
}