"use strict";

import Card from "./Card";

export default class List {
    constructor(list) {
        this.id = list.id;
        this.title = list.title;
        this.cards = Card.parseCards(list.cards);
    }

    static parseLists(lists = []) {
        let retValue = [];
        for (let i = 0; i < retValue.length; i++) {
            retValue.push(new List(lists[i]));
        }
        return retValue;
    }
}