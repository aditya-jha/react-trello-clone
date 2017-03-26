"use strict";

import React, {PropTypes} from "react";
import {Row, Col} from "react-flexbox-grid";
import CardContainer from "./../container/CardContainer";
import AddNewCardContainer from "./../container/AddNewCardContainer";
import EditTitleComponent from "./EditTitleComponent";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="list-component-wrapper">
                <div className="list-component-title">
                    <Row between="xs">
                        <Col xs={10}>
                            <EditTitleComponent saveButton={this.saveTitle.bind(this)} returnEmpty={false}
                                                title={this.props.list.title}
                                                hint="Enter list title"
                                                titleClass=""
                                                fullWidth={true}
                                                defaultValue={this.props.list.title}/>
                        </Col>
                        <Col xs={2}>
                            <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                                <MenuItem primaryText="Delete List" onClick={this.deleteList.bind(this)}/>
                            </IconMenu>
                        </Col>
                    </Row>
                </div>
                <Row>
                    {this.props.list.cards.map((card, cardIndex) => (
                        <Col xs={12} key={card.id}>
                            <CardContainer card={card} cardIndex={cardIndex} listIndex={this.props.listIndex}/>
                        </Col>
                    ))}
                    <Col xs={12}>
                        <AddNewCardContainer listIndex={this.props.listIndex} list={this.props.list}/>
                    </Col>
                </Row>
            </div>
        )
    }

    deleteList() {
        this.props.deleteList(this.props.listIndex);
    }

    saveTitle(title) {
        let list = this.props.list;
        list.title = title;
        this.props.updateList(list, this.props.listIndex);
    }
}

ListComponent.propTypes = {
    list: PropTypes.object.isRequired,
    listIndex: PropTypes.number.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired
}