"use strict";

import React, {PropTypes} from "react";
import {Row, Col} from "react-flexbox-grid";
import List from "./../models/List";
import EditTitleComponent from "./EditTitleComponent";

export default class AddNewListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-component-wrapper">
                <Row className="add-new-card-container">
                    <Col xs={12}>
                        <EditTitleComponent hint="Enter list title" title="Add New List..."
                                            saveButton={this.saveList.bind(this)}
                                            titleClass="add-new-list"/>
                    </Col>
                </Row>
            </div>
        )
    }

    saveList(title) {
        let list = new List({
            title: title,
            id: new Date().valueOf()
        });
        this.props.addNewList(list);
    }
}