"use strict";

import User from "./User";

export default class Card {
    constructor(card) {
        this.id = card.id;
        this.listId = card.listId;
        this.title = card.title;
        this.description = card.description;
        this.status = card.status;
        this.member = card.member ? new User(card.member) : null;
    }

    static parseCards(cards = []) {
        let retValue = [];
        for (let i = 0; i < cards.length; i++) {
            retValue.push(new Card(cards[i]));
        }
        return retValue;
    }
}