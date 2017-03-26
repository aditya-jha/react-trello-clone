"use strict";

import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import {Row, Col} from "react-flexbox-grid";

export default class EditTitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scope = {
            title: props.defaultValue
        };
        this.state = {
            editCard: !(!props.editMode)
        };
    }

    render() {
        const styles = {
            closeButton: {
                fontSize: 18,
                marginLeft: 5,
                cursor: "pointer"
            },
            defaultTitle: {
                margin: 0,
            }
        };

        return (
            <Row>
                <Col xs={12}>
                    {this.state.editCard ?
                        <div className={this.props.editClass}>
                            <form onSubmit={this.saveCard.bind(this)}>
                                <TextField
                                    multiLine={this.props.multiLine}
                                    ref="title"
                                    type="text"
                                    onBlur={this.onInputBlur.bind(this)}
                                    onChange={this.onInputChange.bind(this)}
                                    fullWidth={this.props.fullWidth}
                                    defaultValue={this.props.defaultValue}
                                    hintText={this.props.hint}/>
                            </form>
                            {this.props.multiLine ?
                                <div>
                                    <FlatButton label="save" primary={true} type="submit"
                                                onClick={this.saveCard.bind(this)}/>
                                    {/*<span style={styles.closeButton} onClick={this.toggleCardEdit.bind(this)}>x</span>*/}
                                </div> : null}

                        </div>
                        :
                        <p onClick={this.toggleCardEdit.bind(this)}
                           className={this.props.titleClass}>{this.props.title}</p>
                    }
                </Col>
            </Row>
        )
    }

    onInputBlur() {
        if (this.props.multiLine) {
            this.saveCard();
        }
        this.setState((prevState, props) => {
            return {
                editCard: false
            }
        });
    }

    onInputChange(event, value) {
        this.scope.title = value;
    }

    toggleCardEdit() {
        this.setState((prevState, props) => {
            return {
                editCard: !prevState.editCard
            };
        }, function () {
            if (this.state.editCard) {
                this.refs.title.focus();
            }
        });
    }

    saveCard(event) {
        if (event) event.preventDefault();
        if (!this.props.returnEmpty && !this.scope.title) return;
        this.props.saveButton(this.scope.title);
        this.toggleCardEdit();
    }
}

EditTitleComponent.defaultProps = {
    returnEmpty: false,
    editMode: false,
    fullWidth: true,
    multiLine: false
};

EditTitleComponent.propTypes = {
    returnEmpty: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    saveButton: PropTypes.func.isRequired,
    editMode: PropTypes.bool,
    fullWidth: PropTypes.bool,
    multiLine: PropTypes.bool
};