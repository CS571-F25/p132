import HeaderBar from "./HeaderBar";
import "./ExhibitDetails.css";

function FishProfile(props) {
    return <div style={{ padding: 5 }}>
        <img src="images/fish_placeholder.png" alt="an image of a fish" height="50"/>
        <p>Fish</p>
    </div>
}

export default function ExhibitDetails(props) {
    let fish = [1, 2, 3]

    return <div>
        <HeaderBar/>
        <div id="main">
            <img src="images/placeholder.png" alt="an image of an aqaurium" height="250"/>
            <div id="info">
                <h2>Exhibit Name</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique arcu porta pulvinar aliquet. Duis ut interdum mauris. Vivamus in lectus eget massa molestie pretium. Ut tempor at mauris at convallis. </p>
            </div>
        </div>
        <div id="fish-profiles">
            { fish.map(f => <FishProfile/>) }
        </div>
    </div>
}