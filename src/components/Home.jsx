import Events from "./Events";
import Exhibits from "./Exhibits";
import Species from "./Species";
import HeaderBar from "./HeaderBar";
import "./Home.css"

export default function Home(props) {
    return <div id="home-main">
        <h1 id="aq-header">AQUARIUM</h1>
        <HeaderBar/>
        <Events />
        <Exhibits id="exhbits" />
        <Species id="species" />
    </div>
}