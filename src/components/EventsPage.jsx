import { useState } from "react";

import HeaderBar from "./HeaderBar";
import "./EventCard.css";

function EventCard(props) {
    const [seeMore, setSeeMore] = useState(false);

    return <div id="main">
        <img src="images/placeholder.png" alt="an image of an aqaurium" height="250"/>
        <div id="info">
            <h2>Event Name</h2>
            <p>time and place of event</p>
            { seeMore 
                ? <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique arcu porta pulvinar aliquet. Duis ut interdum mauris. Vivamus in lectus eget massa molestie pretium. Ut tempor at mauris at convallis. </p>
                : <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. </p>
            }
            <button onClick={() => setSeeMore(curr => !curr)}>{seeMore ? "see less" : "see more"}</button>
        </div>
    </div>
}

export default function EventsPage(props) {
    let events = [1, 2, 3, 4, 5];
    return <div>
        <HeaderBar/>
        { events 
            ? events.map(event => <EventCard key={event}/>)
            : <div/> }
    </div>
}