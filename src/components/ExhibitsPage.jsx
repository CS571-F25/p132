import { useNavigate } from "react-router";

import HeaderBar from "./HeaderBar";
import "./ExhibitCard.css";

function ExhibitCard(props) {
    const navigate = useNavigate();

    return <div>
        { props.num % 2 === 0
            ? <div id="main">
                <img src="images/placeholder.png" alt="an image of an aqaurium" height="250"/>
                <div id="info">
                    <h2>Exhibit Name</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique arcu porta pulvinar aliquet. Duis ut interdum mauris. Vivamus in lectus eget massa molestie pretium. Ut tempor at mauris at convallis. </p>
                    <button onClick={() => navigate("/exhibit_info")}>learn more</button>
                </div>
            </div>
            : <div id="main">
                <div id="info">
                    <h2>Exhibit Name</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique arcu porta pulvinar aliquet. Duis ut interdum mauris. Vivamus in lectus eget massa molestie pretium. Ut tempor at mauris at convallis. </p>
                    <button onClick={() => navigate("/exhibit_info")}>learn more</button>
                </div>
                <img src="images/placeholder.png" alt="an image of an aqaurium" height="250"/>
            </div>
            }
    </div>
}

function ExhibitZone(props) {
    let exhibits = [1, 2, 3]
    return <div>
        { exhibits 
            ? exhibits.map(exhibit => <ExhibitCard key={exhibit} num={exhibit}/>)
            : <p>Loading exhibits...</p>
        }
    </div>
}

export default function ExhibitsPage(props) {
    return <div>
        <HeaderBar/>
        <ExhibitZone/>
    </div>
}