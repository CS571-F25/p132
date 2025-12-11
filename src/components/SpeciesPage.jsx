import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { species } from "../information";

import HeaderBar from "./HeaderBar";
import "./SpeciesPage.css"

export default function SpeciesPage(props) {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [allFish, setAllFish] = useState(species);
    const [curFish, setCurFish] = useState("")

    function updateSearch() {
        let term = document.getElementById("search").value.toLowerCase().trim();
        setAllFish(species.filter( f => f.name.toLowerCase().includes(term) ));
    }
    
    return <div id="species-main">
        <HeaderBar/>
        <div style={{display: "flex"}}>
            <Form.Label>Search</Form.Label>
            <Form.Control id="search" onChange={updateSearch}/>
        </div>
        <Container>
            <Row>
                {
                    allFish.map(f => {
                        return <Col 
                                key={f.id} xs={12} sm={12} md={6} lg={4} xl={4}
                                style={{padding: 5}}
                                onClick={() => {
                                    setCurFish(f);
                                    setShowModal(true);
                                }}
                            >
                            <img src={`images/${f.img}.png`} alt={`an image of a ${f.name}`} height="200"/>
                            <p>{f.name}</p>
                        </Col>
                    })
                }
            </Row>
        </Container>
        <Modal id="modal" show={showModal}>
            <Modal.Header>
                <Modal.Title>{curFish.name}</Modal.Title>
                <button id="x-button" onClick={() => setShowModal(false)}>X</button>
            </Modal.Header>
            <Modal.Body>
                <img src={`images/${curFish.img}.png`} alt={`an image of a ${curFish.name}`} height="200"/>
                <p>{curFish.description}</p>
            </Modal.Body>
        </Modal>
    </div>
}