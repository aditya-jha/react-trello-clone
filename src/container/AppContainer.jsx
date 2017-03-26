"use strict";

import {connect} from 'react-redux';
import AppComponent from './../components/AppComponent';
import actions from "./../actions/index";

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initializeLists: (data) => {
            dispatch(actions.initializeLists(data));
        },

        updateList: (list, listIndex) => {
            dispatch(actions.updateList(list, listIndex));
        },

        deleteList: (listIndex) => {
            dispatch(actions.deleteList(listIndex));
        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;