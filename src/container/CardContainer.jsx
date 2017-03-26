"use strict";

import {connect} from 'react-redux';
import CardComponent from './../components/CardComponent';
import actions from "./../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        card: ownProps.card,
        cardIndex: ownProps.cardIndex,
        listIndex: ownProps.listIndex,
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCard: (card, cardIndex, listIndex) => {
            dispatch(actions.updateCard(card, cardIndex, listIndex));
        },

        deleteCard: (card, cardIndex, listIndex) => {
            dispatch(actions.deleteCard(card, cardIndex, listIndex));
        },

        moveCard: (cardIndex, listIndex, newListIndex) => {
            dispatch(actions.moveCard(cardIndex, listIndex, newListIndex));
        }
    }
};

const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardComponent);

export default CardContainer;