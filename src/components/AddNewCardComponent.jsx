"use strict";

import React, {PropTypes} from "react";
import {Row, Col} from "react-flexbox-grid";
import Card from "./../models/Card";
import EditTitleComponent from "./EditTitleComponent";

export default class AddNewCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add-new-card-container">
                <Row>
                    <Col xs={12}>
                        <EditTitleComponent title="Add New Card..." hint="Enter card title"
                                            saveButton={this.saveCard.bind(this)}
                                            titleClass="add-new-card"/>
                    </Col>
                </Row>
            </div>
        )
    }

    saveCard(title) {
        let card = new Card({
            title: title,
            id: new Date().valueOf(),
            listId: this.props.list.id
        });

        this.props.addNewCard(card, this.props.listIndex);
    }
}