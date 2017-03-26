"use strict";

import ActionConstants from "./../actions/ActionConstants";

let defaultState = {
    lists: []
};

const reducer = (state = defaultState, action) => {
    let lists, cards;
    switch (action.type) {
        case ActionConstants.initializeLists:
            return {
                ...state,
                lists: action.lists
            };
        case ActionConstants.addNewList:
            lists = state.lists.slice();
            lists.push(action.list);
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.updateList:
            lists = state.lists.slice();
            lists[action.listIndex] = action.list;
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.deleteList:
            lists = state.lists.slice();
            lists.splice(action.listIndex, 1);
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.addNewCard:
            lists = state.lists.slice();
            lists[action.listIndex].cards.push(action.card);
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.updateCard:
            lists = state.lists.slice();
            lists[action.listIndex].cards[action.cardIndex] = action.card;
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.deleteCard:
            lists = state.lists.slice();
            lists[action.listIndex].cards.splice(action.cardIndex, 1);
            return {
                ...state,
                lists: lists
            };
        case ActionConstants.moveCard:
            lists = state.lists.slice();
            let removedCard = lists[action.listIndex].cards.splice(action.cardIndex, 1)[0];
            lists[action.newListIndex].cards.push(removedCard);
            return {
                ...state,
                lists: lists
            };
        default:
            return state;
    }
};

export default reducer;

