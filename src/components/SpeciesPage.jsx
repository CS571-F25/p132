import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";

import HeaderBar from "./HeaderBar";

export default function SpeciesPage(props) {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    let fish = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    return <div>
        <HeaderBar/>
        <div style={{display: "flex"}}>
            <Form.Label id="search">Search</Form.Label>
            <Form.Control/>
        </div>
        <Container>
            <Row>
                {
                    fish.map(f => {
                        return <Col 
                                key={f} xs={12} sm={12} md={6} lg={4} xl={4}
                                style={{padding: 5}}
                                onClick={() => setShowModal(true)}
                            >
                            <img src="images/fish_placeholder.png" alt="an image of a fish" height="200"/>
                            <p>Fish</p>
                        </Col>
                    })
                }
            </Row>
        </Container>
        <Modal show={showModal}>
            <Modal.Header>
                <Modal.Title>Fish name</Modal.Title>
                <button onClick={() => setShowModal(false)}>X</button>
            </Modal.Header>
            <Modal.Body>
                <img src="images/fish_placeholder.png" alt="an image of a fish" height="200"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nisi, vestibulum vitae sodales vitae, convallis sed nibh. Pellentesque pharetra urna sit amet nisi fringilla dictum sit amet ac arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </Modal.Body>
        </Modal>
    </div>
}