import HeaderBar from "./HeaderBar";
import "./EventsPage.css"
import EventCard from "./EventCard";

export default function EventsPage(props) {
    return <div id="events-main">
        <HeaderBar/>
        <div id="event-cards">
            { props.events 
                ? props.events.map(event => <EventCard key={event.name} event={event} addBooked={props.addBooked} removeBooked={props.removeBooked}/>)
                : <div/> }
        </div>
    </div>
}