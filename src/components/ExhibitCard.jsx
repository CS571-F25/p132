import "./ExhibitsPage.css";

export default function ExhibitCard(props) {
    let exhibit = props.exhibit;

    return <div>
        { props.num % 2 === 0
            ? <div id="main">
                <img src={`images/${exhibit.img}.png`} alt={`an image of the ${exhibit.name} exhibit`} height="250"/>
                <div id="info">
                    <h2>{exhibit.name}</h2>
                    <p>{exhibit.description}</p>
                    <button onClick={() => props.setExhibit(exhibit.id)}>learn more</button>
                </div>
            </div>
            : <div id="main">
                <div id="info">
                    <h2>{exhibit.name}</h2>
                    <p>{exhibit.description}</p>
                    <button onClick={() => props.setExhibit(exhibit.id)}>learn more</button>
                </div>
                <img src={`images/${exhibit.img}.png`} alt={`an image of the ${exhibit.name} exhibit`} height="250"/>
            </div>
            }
    </div>
}