"use strict";

import {connect} from 'react-redux';
import AddNewCardComponent from './../components/AddNewCardComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        listIndex: ownProps.listIndex,
        list: ownProps.list
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewCard: (card, listIndex) => {
            dispatch(actions.addNewCard(card, listIndex));
        }
    }
};

const AddNewCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCardComponent);

export default AddNewCardContainer;