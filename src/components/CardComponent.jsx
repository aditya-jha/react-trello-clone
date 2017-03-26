"use strict";

import React, {PropTypes} from "react";
import {Row, Col} from "react-flexbox-grid";
import Paper from "material-ui/Paper";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import EditTitleComponent from "./EditTitleComponent";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import User from "./../models/User";

export default class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editDescription: false,
            selectedList: props.card.listId,
            selectedMember: props.card.member || 0
        };
        this.scope = {
            card: props.card,
            dummyMembers: [
                new User({id: 0, name: "Tag a member"}),
                new User({id: 1, name: "dummy 1"}),
                new User({id: 2, name: "dummy 2"}),
                new User({id: 3, name: "dummy 3"})
            ]
        };
    }

    render() {

        const styles = {
            titleWrapperStyle: {
                paddingTop: 16,
                paddingLeft: 16
            },
            editText: {
                paddingLeft: 20
            }
        };

        const actions = (
            <Row>
                <Col xs={3}>
                    <FlatButton secondary={true} label="Delete"
                                onClick={this.deleteCard.bind(this)}/>
                </Col>
                <Col xs={6}>
                    <FlatButton label="Cancel" onClick={this.cancelButton.bind(this)}/>
                </Col>
                <Col xs={3}>
                    <RaisedButton primary={true} label="Save" onClick={this.saveCard.bind(this)}/>
                </Col>
            </Row>
        );

        const titleElement = (
            <EditTitleComponent defaultValue={this.scope.card.title}
                                returnEmpty={false} hint={this.scope.card.title}
                                title={this.scope.card.title}
                                saveButton={this.saveTitle.bind(this)}
                                titleClass="dialog-title"
                                editClass="dialog-title-edit"/>
        );

        return (
            <div className="card-wrapper">
                <Paper zDepth={1} rounded={false} onClick={this.editCard.bind(this)}>
                    <p className="card-content">{this.scope.card.title}</p>
                </Paper>
                {this.state.edit ?
                    <Dialog title={titleElement} actions={actions} modal={true} open={this.state.edit}
                            autoScrollBodyContent={true}>
                        <Row>
                            <Col xs={12}>
                                {(!this.scope.card.description || this.state.editDescription) ?
                                    <EditTitleComponent title="Edit the description" hint="description"
                                                        saveButton={this.saveDescription.bind(this)}
                                                        editMode={this.state.editDescription}
                                                        defaultValue={this.scope.card.description}
                                                        returnEmpty={true}
                                                        fullWidth={true}
                                                        multiLine={true}/>
                                    :
                                    <div className="description-container">
                                        <span>Description</span>
                                        <span onClick={this.editDescription.bind(this)}
                                              style={styles.editText}><u>edit</u></span>
                                        <p onClick={this.editDescription.bind(this)} className="card-description-text">
                                            {this.scope.card.description}
                                        </p>
                                    </div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <p style={{marginBottom: 0}}>Change List</p>
                                <DropDownMenu value={this.state.selectedList} onChange={this.changeList.bind(this)}
                                              className="dropdown-menu">
                                    {this.props.lists.map((list, listIndex) => (
                                        <MenuItem value={list.id} primaryText={list.title} key={list.id}/>
                                    ))}
                                </DropDownMenu>
                            </Col>
                            <Col xs={6}>
                                <p style={{marginBottom: 0}}>Tag a Member</p>
                                <DropDownMenu value={this.state.selectedMember} onChange={this.tagMember.bind(this)}
                                              className="dropdown-menu">
                                    {this.scope.dummyMembers.map((member, memberIndex) => (
                                        <MenuItem value={member.id} primaryText={member.name} key={member.id}/>
                                    ))}
                                </DropDownMenu>
                            </Col>
                        </Row>
                    </Dialog>
                    : null}
            </div>
        )
    }

    editCard() {
        this.setState({edit: true});
    }

    deleteCard() {
        this.props.deleteCard(this.scope.card, this.props.cardIndex, this.props.listIndex);
        this.cancelButton();
    }

    saveCard(close = false) {
        this.props.updateCard(this.scope.card, this.props.cardIndex, this.props.listIndex);
        close ? this.cancelButton() : null;
    }

    cancelButton() {
        this.setState({edit: false});
    }

    saveTitle(title) {
        this.scope.card.title = title;
        this.saveCard(false);
    }

    saveDescription(description) {
        this.scope.card.description = description;
        this.setState({editDescription: false});
        this.saveCard();
    }

    editDescription() {
        this.setState({editDescription: true});
    }

    changeList(event, index, value) {
        this.setState({selectedList: value});
        this.scope.card.listId = value;
        this.props.moveCard(this.props.cardIndex, this.props.listIndex, index);
    }

    tagMember(event, index, value) {
        this.setState({selectedMember: value});
        this.scope.card.member = value;
        this.saveCard(false);
    }
}

CardComponent.propTypes = {
    updateCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired,
    cardIndex: PropTypes.number.isRequired,
    listIndex: PropTypes.number.isRequired,
    lists: PropTypes.array.isRequired
};