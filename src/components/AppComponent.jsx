"use strict";

import React, {PropTypes} from "react";
import LocalStorageService from "./../services/index";
import {Grid, Row, Col} from "react-flexbox-grid";
import AddNewListContainer from "./../container/AddNewListContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ListContainer from "./../container/ListContainer";
import ListComponent from "./ListComponent";

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        LocalStorageService.setData(nextProps.lists);
    }

    componentWillMount() {
        LocalStorageService.fetchData()
            .then((data) => {
                this.props.initializeLists(data);
            })
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Task Management System</h1>
                        </Col>
                    </Row>
                    <Row around="xs">
                        {this.props.lists.map((list, listIndex) => (
                            <Col xs={12} sm={6} md={6} key={list.id}>
                                <ListComponent list={list} listIndex={listIndex}
                                               updateList={this.props.updateList.bind(this, list, listIndex)}
                                               deleteList={this.props.deleteList.bind(this, listIndex)}/>
                            </Col>
                        ))}
                        <Col xs={12} sm={6} md={6}>
                            <AddNewListContainer/>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

AppComponent.propTypes = {
    lists: PropTypes.array.isRequired,
    initializeLists: PropTypes.func.isRequired
};