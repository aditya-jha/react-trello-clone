"use strict";

import {connect} from 'react-redux';
import ListComponent from './../components/ListComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        list: ownProps.list,
        listIndex: ownProps.listIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: (list, listIndex) => {
            dispatch(actions.updateList(list, listIndex));
        },

        deleteList: (listIndex) => {
            dispatch(actions.deleteList(listIndex));
        }
    }
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent);

export default ListContainer;