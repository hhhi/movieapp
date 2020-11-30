import React, { Component } from "react"
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component{
    constructor (props){
        super(props);
        this.state={
            show:false,
        };
    }
    handleShow = () => {
        this.setState({show: !this.state.show});

    };
    render() {
        return(
            <div>
                <button variant="primary" onclick={this.handleShow}>
                    +
                    </button>
                    <Modal show={this.state.show} onhide={this.handleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new Movie</Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div>
                                    <label className="input">Title:</label>
                                    <input type="text" name="name"/>

                                </div>
                            <div>
                                    <lable className="input">Image:</lable>
                                    <input type="text" name="image" />

                            </div>
                                <label className="input">Rating:</label>
                                <input type="texte" name="rating" />
                            </div>
                            <div>
                                <lable className="input">Year:</lable>
                                <input type="text" name="year" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button vraint="secondary" onclick={this.handleShow}>
                                Close
                            </Button>
                            <Button vraint="primary">Add Movie</Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        
        )
    }

}
export default AddModal;