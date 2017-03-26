"use strict";

import ActionConstants from "./ActionConstants";

const actions = {
    initializeLists(lists) {
        return {
            type: ActionConstants.initializeLists,
            lists
        }
    },

    addNewList(list) {
        return {
            type: ActionConstants.addNewList,
            list
        }
    },

    updateList(list, listIndex) {
        return {
            type: ActionConstants.updateList,
            list,
            listIndex
        }
    },

    deleteList(listIndex) {
        return {
            type: ActionConstants.deleteList,
            listIndex
        }
    },

    addNewCard(card, listIndex) {
        return {
            type: ActionConstants.addNewCard,
            card,
            listIndex
        }
    },

    updateCard(card, cardIndex, listIndex) {
        return {
            type: ActionConstants.updateCard,
            card,
            listIndex,
            cardIndex
        }
    },

    deleteCard(card, cardIndex, listIndex) {
        return {
            type: ActionConstants.deleteCard,
            card,
            listIndex,
            cardIndex
        }
    },

    moveCard(cardIndex, listIndex, newListIndex) {
        return {
            type: ActionConstants.moveCard,
            cardIndex,
            listIndex,
            newListIndex
        }
    }
};

export default actions;