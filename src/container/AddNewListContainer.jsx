"use strict";

import {connect} from 'react-redux';
import AddNewListComponent from './../components/AddNewListComponent';
import actions from "./../actions/index";

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewList: (list) => {
            dispatch(actions.addNewList(list));
        }
    }
};

const AddNewListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewListComponent);

export default AddNewListContainer;