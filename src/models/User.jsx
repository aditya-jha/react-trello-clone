"use strict";

export default class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
    }

    static parseUsers(users = []) {
        let retValue = [];
        for (let i = 0; i < users.length; i++) {
            retValue.push(new User(users[i]));
        }
        return retValue;
    }
}