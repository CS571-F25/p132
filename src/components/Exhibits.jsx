import { useNavigate } from "react-router";
import "./Home.css"

export default function Exhibits(props) {
    const navigate = useNavigate();

    return <div id="home-exhibits">
        <h2>EXHIBITS</h2>
        <button onClick={() => navigate("/exhibits")}>See exhibits</button>
    </div>
}